const thru = require('through2');
const split = require('split2');

let count = 0;

const transformer = thru(
  function (buf, _, next) {
    const line = buf.toString();
    if (++count % 2 == 0) this.push(line.toUpperCase() + '\n')
    else this.push(line.toLowerCase() + '\n')
    next();
  },
  done => done()
);

process.stdin
  .pipe(split())
  .pipe(transformer)
  .pipe(process.stdout);
