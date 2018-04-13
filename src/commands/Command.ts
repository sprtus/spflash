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
  protected static async getInput(placeHolder: string, value: string = '') {
    let input = await window.showInputBox({ placeHolder: placeHolder.replace(/\s\s+/g, ' ').trim(), value });
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

  protected static async showMessage(message: string) {
    window.showInformationMessage(message);
    return true;
  }

  protected static async showError(message: string, consoleErr: any = null) {
    window.showErrorMessage(message);
    if (consoleErr) {
      console.error(consoleErr);
    }
    return false;
  }

  protected static getWorkspaceName() {
    return path.basename(workspace.rootPath);
  }

  protected static async openFile(filePath: string) {
    try {
      const openFile = await workspace.openTextDocument(path.resolve(workspace.rootPath, _.trim(filePath, '/')));
      window.showTextDocument(openFile);
      this.refreshFilesExplorer();
    } catch (e) {
      this.showError(`Error opening file: ${e.message}`, e);
    }
  }

  protected static async createFile(filePath: string, contents: string, openAfterCreate: boolean = true) {
    // Check for file existence
    const newFilePath = path.resolve(workspace.rootPath, _.trim(filePath, '/'));
    if (fs.existsSync(newFilePath)) {
      this.showError(`File ${newFilePath} already exists.`);
      return;
    }

    // Create file directories
    return mkdirp(path.dirname(newFilePath), e => {
      if (e) {
        this.showError(`Error creating directories for new file: ${e.message}`, e);
        return;
      }

      // Create new file
      return fs.writeFile(newFilePath, contents, e => {
        if (e) {
          this.showError(`Error creating new file: ${e.message}`, e);
          return;
        }

        if (openAfterCreate) {
          this.openFile(filePath);
        }
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
    }
  }

  protected static refreshFilesExplorer() {
    commands.executeCommand('workbench.files.action.refreshFilesExplorer');
  }
}
