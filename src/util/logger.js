const process = require('node:process');

function getTime() {
  return (new Date()).toISOString();
}

exports.errorLog = async (message) => {
  process.stderr.write(`${getTime()} - [ERROR] ${message}\n`);
};

exports.infoLog = async (message) => {
  process.stdout.write(`${getTime()} - [INFO] ${message}\n`);
};
