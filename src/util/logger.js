const process = require('node:process');

exports.errorLog = (message) => {
  process.stderr.write(`[ERROR] ${message}\n`);
};

exports.infoLog = (message) => {
  process.stdout.write(`[INFO] ${message}\n`);
};
