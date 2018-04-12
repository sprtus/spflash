'use strict';

import {
  commands,
  ExtensionContext,
} from 'vscode';

// Commands
import MakeMaster from './commands/make/Master';
import MakeLayout from './commands/make/Layout';

export function activate(context: ExtensionContext) {
  // Make files
  commands.registerCommand('spflash.make.master', () => { MakeMaster.run(); });
  commands.registerCommand('spflash.make.layout', () => { MakeLayout.run(); });
}
