const _ = require('lodash');
import Command from '../Command';

export default class MakeLayout extends Command {
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
      hasPageTitle: true,
      hasPageContent: true,
      hasWebPartZones: true,
      hasEditModePanel: true,
    };

    // Determine template type
    const templateType = await this.getListInput('Select template type:', [
      'Default',
      'Minimal',
      'Customized',
    ]);

    // Minimal layout
    if (templateType === 'Minimal') {
      _.merge(template, {
        minimal: true,
        hasPageTitle: false,
        hasPageContent: false,
        hasWebPartZones: false,
        hasEditModePanel: false,
      });
    }

    // Customized layout
    else if (templateType === 'Customized') {
      template.hasPageTitle = await this.getYesNo('Include page title field?');
      template.hasPageContent = await this.getYesNo('Include page content field?');
      template.hasWebPartZones = await this.getYesNo('Include web part zones?');
      template.hasEditModePanel = await this.getYesNo('Include edit mode panel?');
    }

    // File
    let fileName = await this.getFilePathInput('File Name', `Layout.aspx`, this.getPreferredPath('layout'));
    if (!fileName.length) {
      this.showError('File name is required');
      return;
    }

    // Create file
    this.createFileFromTemplate(fileName, 'layout', template);
  }
}
