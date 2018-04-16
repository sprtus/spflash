import Command from '../Command';

export default class MakeWebPart extends Command {
  public static async run() {
    // Environment
    let type = await this.getListInput('Environment Type', [
      'Office 365 or SharePoint 2016',
      'SharePoint 2013',
    ]);

    // Template data
    const template = {
      version: type === 'SharePoint 2013' ? '15' : '16',
      minimal: false,
      title: '',
      description: '',
      html: '',
    };

    // Template data
    template.title = await this.getInput('Web Part Title (optional)');
    template.description = await this.getInput('Web Part Description (optional)');
    template.html = await this.getInput('Web Part HTML (optional)');

    // File
    let fileName = await this.getFilePathInput('File Name', `WebPart.dwp`, this.getPreferredPath('webpart'));
    if (!fileName.length) {
      this.showError('File name is required');
      return;
    }

    // Create file
    this.createFileFromTemplate(fileName, 'webpart-dwp', template);
  }
}
