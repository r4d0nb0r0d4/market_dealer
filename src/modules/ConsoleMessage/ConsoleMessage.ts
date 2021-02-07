import chalk from 'chalk';

import { TConsoleMessage, TMessage } from '__modules/ConsoleMessage/types';

const messageGood: TMessage = (...args: any[]) => console.log(chalk.green(`${new Date().toLocaleString()}: `, ...args));

const messageError: TMessage = (...args: any[]) => console.log(chalk.red(`${new Date().toLocaleString()}: `, ...args));

const messageWarning: TMessage = (...args: any[]) =>
  console.log(chalk.yellow(`${new Date().toLocaleString()}: `, args));

const messageText: TMessage = (...args: any[]) => console.log(chalk.blue(`${new Date().toLocaleString()}: `, ...args));

const ConsoleMessage: TConsoleMessage = {
  good: messageGood,
  error: messageError,
  warning: messageWarning,
  text: messageText,
};

export default ConsoleMessage;
