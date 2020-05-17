const trumpet = require('trumpet');
const fs = require('fs');
const thru = require('through2');

const tr = trumpet();
const stream = tr.select('.loud').createStream();
stream.pipe(thru(
  function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  },
  done => done(),
)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout)