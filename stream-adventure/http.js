const http = require('http');
const through = require('through2');

const transform = through(
  function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  },
  (end) => end(),
)

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(transform).pipe(res);
  }
  else res.end('Not a POST');
});

server.listen(parseInt(process.argv[2]));
