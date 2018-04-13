import Command from '../Command';

export default class MakeMaster extends Command {
  public static async run() {
    // File name
    let fileName = await this.getInput('File Name');
    if (fileName.length === 0) {
      this.showError('File name is required');
      return;
    }

    // Template type
    let type = await this.getListInput('Environment Type', [
      'Office 365',
      'SharePoint 2016',
      'SharePoint 2013',
    ]);
    let template = 'master-o365';
    if (type === 'SharePoint 2013') {
      template = 'master-2013';
    }

    // Project name
    let projectName = await this.getInput('Project Folder Name', this.getWorkspaceName());
    if (projectName.length === 0) {
      projectName = this.getWorkspaceName();
    }

    // Create file
    this.createFileFromTemplate(`${fileName}.master`, template, {
      project: projectName,
    });
  }
}
