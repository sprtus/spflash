import Command from '../Command';

export default class MakeWebPart extends Command {
  public static async run() {
    // Web part type
    let type = await this.getListInput('Web Part Type', [
      'Office 365',
      'SharePoint 2016',
      'SharePoint 2013',
    ]);
    const version = type === 'SharePoint 2013' ? '15' : '16';

    // File name
    let fileName = await this.getFilePathInput('File Name', `WebPart.dwp`, this.getPreferredPath('webpart'));
    if (!fileName.length) {
      this.showError('File name is required');
      return;
    }

    // Web part data
    let title = await this.getInput('Web Part Title');
    let html = await this.getInput('Web Part HTML');

    // Create file
    this.createFileFromTemplate(fileName, 'webpart-dwp', {
      version,
      title,
      html,
    });
  }
}
