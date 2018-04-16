const _ = require('lodash');
import Command from '../Command';

export default class MakeMaster extends Command {
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
      hasCssRegistration: true,
      hasScriptRegistration: true,
      hasAccessibilityLinks: true,
      hasRibbon: true,
      hasSecurityTrimmedRibbon: true,
      hasHeader: true,
      hasBrand: true,
      hasNavGlobal: true,
      hasSearch: true,
      hasPageTitle: true,
      hasSidebar: true,
      hasNavCurrent: true,
    };

    // Determine template type
    const templateType = await this.getListInput('Select template type:', [
      'Default',
      'Minimal',
      'Customized',
    ]);

    // Minimal master
    if (templateType === 'Minimal') {
      _.merge(template, {
        minimal: true,
        hasCssRegistration: false,
        hasScriptRegistration: false,
        hasAccessibilityLinks: false,
        hasRibbon: false,
        hasSecurityTrimmedRibbon: false,
        hasHeader: false,
        hasBrand: false,
        hasNavGlobal: false,
        hasSearch: false,
        hasPageTitle: false,
        hasSidebar: false,
        hasNavCurrent: false,
      });
    }

    // Customized master
    else if (templateType === 'Customized') {
      template.hasCssRegistration = await this.getYesNo('Include CSS file registration?');
      template.hasScriptRegistration = await this.getYesNo('Include JavaScript file registration?');
      template.hasAccessibilityLinks = await this.getYesNo('Include accessibility links?');
      template.hasRibbon = await this.getYesNo('Include SharePoint ribbon?');
      template.hasSecurityTrimmedRibbon = false;
      if (template.hasRibbon) {
        template.hasSecurityTrimmedRibbon = await this.getYesNo('Hide ribbon from anonymous users?');
      }
      template.hasHeader = await this.getYesNo('Include header?');
      template.hasBrand = false;
      template.hasNavGlobal = false;
      template.hasSearch = false;
      if (template.hasHeader) {
        template.hasBrand = await this.getYesNo('Include site brand/logo?');
        template.hasNavGlobal = await this.getYesNo('Include global navigation menu?');
        template.hasSearch = await this.getYesNo('Include search box?');
      }
      template.hasPageTitle = await this.getYesNo('Include page title?');
      template.hasSidebar = await this.getYesNo('Include sidebar?');
      template.hasNavCurrent = false;
      if (template.hasSidebar) {
        template.hasNavCurrent = await this.getYesNo('Include current navigation menu?');
      }
    }

    // File
    let fileName = await this.getFilePathInput('File Name', `${this.getWorkspaceName()}.master`, this.getPreferredPath('master'));
    if (!fileName.length) {
      this.showError('File name is required');
      return;
    }

    // Create file
    this.createFileFromTemplate(fileName, 'master', template);
  }
}
