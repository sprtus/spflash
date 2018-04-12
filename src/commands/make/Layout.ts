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

    // Command
    let command = `touch ./src/layout/${fileName}.aspx`;

    // Generate master page
    cp.exec(command, async (err, stdout) => {
      if (err) {
        this.showError('Could not create page layout', err);
      } else {
        await this.openFile(`/src/layout/${fileName}.aspx`);
      }
    });
  }
}
