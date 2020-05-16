const thru = require('through2');

const stream = thru(
  function (buffer, _, next) {
    this.push(buffer.toString().toUpperCase())
    next();
  },
  done => done()
);

process.stdin.pipe(stream).pipe(process.stdout);
