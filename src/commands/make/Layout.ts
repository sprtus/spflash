import Command from '../Command';

export default class MakeLayout extends Command {
  public static async run() {
    // Template type
    let type = await this.getListInput('Environment Type', [
      'Office 365',
      'SharePoint 2016',
      'SharePoint 2013',
    ]);
    const version = type === 'SharePoint 2013' ? '15' : '16';

    // File name
    let fileName = await this.getFilePathInput('File Name', `NewLayout.aspx`, this.getPreferredPath('layout'));
    if (fileName.length === 0) {
      this.showError('File name is required');
      return;
    }

    // Get layout data
    const hasPageContent = await this.getYesNo('Include page content?');
    const hasWebPartZones = await this.getYesNo('Include web part zones?');
    const hasEditModePanel = await this.getYesNo('Include edit mode panel?');

    // Create file
    this.createFileFromTemplate(fileName, 'layout', {
      version,
      hasPageContent,
      hasWebPartZones,
      hasEditModePanel,
    });
  }
}
