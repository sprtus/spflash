'use strict';

import {
  commands,
  ExtensionContext,
} from 'vscode';

// Commands
import MakeMaster from './commands/make/Master';
import MakeLayout from './commands/make/Layout';
import MakeWebPart from './commands/make/WebPart';

export function activate(context: ExtensionContext) {
  // Make files
  commands.registerCommand('spflash.make.master', () => { MakeMaster.run(); });
  commands.registerCommand('spflash.make.layout', () => { MakeLayout.run(); });
  commands.registerCommand('spflash.make.webpart', () => { MakeWebPart.run(); });
}
