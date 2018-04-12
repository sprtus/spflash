import {
  window,
  commands,
  workspace,
} from 'vscode';

export default class Command {
  protected static async getInput(placeHolder: string) {
    let value = await window.showInputBox({ placeHolder: placeHolder.replace(/\s\s+/g, ' ').trim() });
    value = value === undefined ? '' : value;
    return value;
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
      console.error(consoleErr + ' (See output console for more details)');
    }
    return false;
  }

  protected static async openFile(filename: string) {
    try {
      let doc = await workspace.openTextDocument(workspace.rootPath + filename);
      window.showTextDocument(doc);
      this.refreshFilesExplorer();
    } catch (e) {
      console.log(e.getMessage);
    }
  }

  protected static refreshFilesExplorer() {
    commands.executeCommand('workbench.files.action.refreshFilesExplorer');
  }
}
