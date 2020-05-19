const combine = require("stream-combiner");
const split = require("split2");
const thru = require("through2");
var zlib = require("zlib");
let current;

module.exports = function () {
  return combine(
    split("\n"),
    thru(
      function (line, _, next) {
        if (line.length === 0) return next();
        var row = JSON.parse(line);

        if (row.type === "genre") {
          if (current) {
            this.push(JSON.stringify(current) + "\n");
          }
          current = { name: row.name, books: [] };
        } else if (row.type === "book") {
          current.books.push(row.name);
        }
        next();
      },
      function (end) {
        if (current) {
          this.push(JSON.stringify(current) + "\n");
        }
        end();
      }
    ),
    zlib.createGzip()
  );
};
