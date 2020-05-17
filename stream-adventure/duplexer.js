const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');

const command = (cmd, args) => {
  const childProcess = spawn(cmd, args);

  return duplexer(childProcess.stdin, childProcess.stdout);
};

module.exports = command;
