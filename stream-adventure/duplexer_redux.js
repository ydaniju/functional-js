const duplexer = require('duplexer2');

module.exports = function (counter) {
  counter.on('pipe', (src) => {
    counter.setCounts();
  });
}