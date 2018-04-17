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
  const makeMasterCmd = commands.registerCommand('spflash.makeMaster', () => { MakeMaster.run(); });
  const makeLayoutCmd = commands.registerCommand('spflash.makeLayout', () => { MakeLayout.run(); });
  const makeWebpartCmd = commands.registerCommand('spflash.makeWebpart', () => { MakeWebPart.run(); });

  // Disposables
  context.subscriptions.push(makeMasterCmd);
  context.subscriptions.push(makeLayoutCmd);
  context.subscriptions.push(makeWebpartCmd);
}
