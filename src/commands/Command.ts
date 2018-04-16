import {
  window,
  commands,
  workspace,
} from 'vscode';
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const handlebars = require('handlebars');

export default class Command {
  protected static config = workspace.getConfiguration('spflash');

  protected static async getInput(placeHolder: string = '', value?: string, valueSelection?: [number, number]) {
    let input = await window.showInputBox({
      placeHolder: placeHolder.replace(/\s\s+/g, ' ').trim(),
      value,
      valueSelection,
    });
    input = input === undefined ? '' : input;
    return input;
  }

  protected static async getListInput(placeHolder: string, list: string[]) {
    let value = await window.showQuickPick(list, { placeHolder: placeHolder });
    value = value === undefined ? '' : value;
    return value;
  }

  protected static async getYesNo(placeHolder: string): Promise<boolean> {
    let value = await window.showQuickPick(['Yes', 'No'], { placeHolder: placeHolder });
    return value !== undefined && value.toLowerCase() === 'yes' ? true : false;
  }

  protected static async getFilePathInput(placeHolder: string, fileName: string = '', filePath: string = this.getWorkspacePath()) {
    const inputValue = `${filePath}/${fileName}`;
    const selection: [number, number] = [
      inputValue.lastIndexOf('/') + 1,
      inputValue.lastIndexOf('.'),
    ];
    return this.getInput(placeHolder, inputValue, selection);
  }

  protected static showMessage(message: string) {
    window.showInformationMessage(message);
  }

  protected static showError(message: string, consoleErr: any = null) {
    window.showErrorMessage(message);
    if (consoleErr) {
      console.error(consoleErr);
    }
  }

  protected static getWorkspacePath(): string {
    return <string>workspace.rootPath || '';
  }

  protected static getWorkspaceName(): string {
    return path.basename(this.getWorkspacePath());
  }

  protected static async openFile(filePath: string) {
    try {
      const openFile = await workspace.openTextDocument(filePath);
      window.showTextDocument(openFile);
      this.refreshFilesExplorer();
      return true;
    } catch (e) {
      this.showError(`Error opening file: ${e.message}`, e);
      return false;
    }
  }

  protected static async createFile(filePath: string, contents: string, openAfterCreate: boolean = true) {
    // Check for file existence
    if (fs.existsSync(filePath)) {
      this.showError(`File ${filePath} already exists.`);
      return false;
    }

    // Create file directories
    return mkdirp(path.dirname(filePath), (e: any) => {
      if (e) {
        this.showError(`Error creating directories for new file: ${e.message}`, e);
        return false;
      }

      // Create new file
      return fs.writeFile(filePath, contents, (e: any) => {
        if (e) {
          this.showError(`Error creating new file: ${e.message}`, e);
          return false;
        }

        if (openAfterCreate) {
          this.openFile(filePath);
        }

        return true;
      });
    });
  }

  protected static async createFileFromTemplate(filePath: string, templateName: string, templateData: object = {}, openAfterCreate: boolean = true) {
    try {
      // Build template from file and template data
      const source = require(path.resolve(__dirname, `../templates/${templateName}`));
      const template = handlebars.compile(source.default);
      const contents = template(_.merge({ project: path.basename(workspace.rootPath) }, templateData));

      // Create file
      return this.createFile(filePath, contents, openAfterCreate);

    } catch (e) {
      this.showError(`Error compiling template file: ${e.message}`, e);
      return false;
    }
  }

  protected static pathExists (dir: string): boolean {
    return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
  }

  protected static getPreferredPath(type: string = 'master'): string {
    let preferredPath = this.getWorkspacePath();
    for (let dir of this.config[type === 'master' ? 'preferredMasterDirs' : 'preferredLayoutDirs']) {
      const dirPath: string = `${this.getWorkspacePath()}/${dir}`;
      if (this.pathExists(dirPath)) {
        preferredPath = dirPath;
        break;
      }
    }
    return preferredPath;
  }

  protected static refreshFilesExplorer() {
    commands.executeCommand('workbench.files.action.refreshFilesExplorer');
  }
}
