import Command from '../Command';
import cp = require('child_process');

export default class MakeLayout extends Command {
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
    let version = '16';
    if (type === 'SharePoint 2013') {
      version = '15';
    }

    // Get layout data
    const hasPageContent = await this.getYesNo('Include page content field?');
    const hasWebPartZones = await this.getYesNo('Include web part zones?');
    const hasEditModePanel = await this.getYesNo('Include edit mode panel?');

    // Create file
    this.createFileFromTemplate(`${fileName}.aspx`, 'layout', {
      version,
      hasPageContent,
      hasWebPartZones,
      hasEditModePanel,
    });
  }
}
