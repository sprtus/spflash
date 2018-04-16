import Command from '../Command';

export default class MakeMaster extends Command {
  public static async run() {
    // Template type
    let type = await this.getListInput('Environment Type', [
      'Office 365',
      'SharePoint 2016',
      'SharePoint 2013',
    ]);
    const template = type === 'SharePoint 2013' ? 'master-2013' : 'master-o365';

    // File name
    let fileName = await this.getFilePathInput('File Name', `${this.getWorkspaceName()}.master`, this.getPreferredPath('master'));
    if (!fileName.length) {
      this.showError('File name is required');
      return;
    }

    // Create file
    this.createFileFromTemplate(fileName, template);
  }
}
