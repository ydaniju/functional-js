var slice = Array.prototype.slice
    
function logger(namespace) {
  return function message() {
    console.log.apply(console.log, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
