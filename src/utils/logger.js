import process from 'node:process';

const COLOR_RESET = '\x1b[0m';
const COLOR_RED = '\x1b[31m';
const COLOR_GREEN = '\x1b[32m';

function getTime() {
  return (new Date()).toISOString();
}

export const errorLog = async (message) => {
  process.stderr.write(`${getTime()} - ${COLOR_RED}[ERROR]${COLOR_RESET} ${message}\n`);
};

export const infoLog = async (message) => {
  process.stdout.write(`${getTime()} - ${COLOR_GREEN}[INFO]${COLOR_RESET} ${message}\n`);
};
