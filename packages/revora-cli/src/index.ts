#!/usr/bin/env node
import { Command } from 'commander';
import { analyzeCommand } from './commands/analyze';
import { historyCommand } from './commands/history';
import { explainCommand } from './commands/explain';
import { doctorCommand } from './commands/doctor';
import { ciCommand } from './commands/ci';
import { authCommands } from './commands/auth';
import { billingCommands } from './commands/billing';

const program = new Command();

program
  .name('revora')
  .description('Revora Operational Intelligence CLI')
  .version('1.0.0');

program.addCommand(analyzeCommand);
program.addCommand(historyCommand);
program.addCommand(explainCommand);
program.addCommand(doctorCommand);
program.addCommand(ciCommand);
program.addCommand(authCommands);

program
  .command('login <api-key>')
  .description('Log in to your Revora workspace')
  .action((apiKey) => {
    const command = authCommands.commands.find(c => c.name() === 'login');
    if (command) (command as any).emit('command:login', [apiKey]);
  });
  
program
  .command('logout')
  .description('Log out and clear stored API Key')
  .action(() => {
    const command = authCommands.commands.find(c => c.name() === 'logout');
    if (command) (command as any).emit('command:logout');
  });

program
  .command('whoami')
  .description('Display the current authentication status')
  .action(() => {
    const command = authCommands.commands.find(c => c.name() === 'whoami');
    if (command) (command as any).emit('command:whoami');
  });

program
  .command('usage')
  .description('Check current workspace quota usage')
  .action(() => {
    const command = billingCommands.commands.find(c => c.name() === 'usage');
    if (command) (command as any).emit('command:usage');
  });

program
  .command('plan')
  .description('View current subscription plan details')
  .action(() => {
    const command = billingCommands.commands.find(c => c.name() === 'plan');
    if (command) (command as any).emit('command:plan');
  });

program.parse(process.argv);
