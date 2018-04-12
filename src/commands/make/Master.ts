import Command from '../Command';
import cp = require('child_process');

export default class MakeMaster extends Command {
  public static async run() {
    // File name
    let fileName = await this.getInput('File Name');
    if (fileName.length === 0) {
      this.showError('File name is required');
      return;
    }

    // Command
    let command = `touch ./src/master/${fileName}.master`;

    // Generate master page
    cp.exec(command, async (err, stdout) => {
      if (err) {
        this.showError('Could not create the model', err);
      } else {
        await this.openFile(`/src/master/${fileName}.master`);
      }
    });
  }
}
