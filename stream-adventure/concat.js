const concat = require('concat-stream');

const combineStream = concat(buffer => console.log(buffer
  .toString()
  .split('')
  .reverse()
  .join('')
));

process.stdin
  .pipe(combineStream)