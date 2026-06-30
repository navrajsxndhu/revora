import chalk from 'chalk';

export const cliLogger = {
  info: (msg: string) => console.log(chalk.blue('ℹ'), msg),
  success: (msg: string) => console.log(chalk.green('✔'), msg),
  warning: (msg: string) => console.log(chalk.yellow('⚠'), msg),
  error: (msg: string) => console.error(chalk.red('✖'), msg),
  bullet: (msg: string) => console.log(chalk.gray('•'), msg),
  heading: (msg: string) => console.log('\n' + chalk.bold(msg) + '\n'),
  riskLevel: (level: string) => {
    switch (level) {
      case 'CRITICAL': return chalk.bgRed.white.bold(' CRITICAL RISK ');
      case 'HIGH': return chalk.bgYellow.black.bold(' HIGH RISK ');
      case 'MEDIUM': return chalk.bgYellowBright.black.bold(' MEDIUM RISK ');
      default: return chalk.bgGreen.black.bold(' LOW RISK ');
    }
  }
};
