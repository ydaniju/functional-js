const duplexer = require('duplexer2');
const thru = require('through2').obj

module.exports = function (counter) {
  const counts = {};

  const inputStream = thru(
    function (row, _, next) {
      counts[row.country] = (counts[row.country] || 0) + 1
      next()
    },
    end => {
      counter.setCounts(counts)
      end()
    },
  )

  return duplexer({ objectMode: true }, inputStream, counter);
}
