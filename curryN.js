function curryN(fn, n = fn.length) {
  return function(...args) {
    if (args.length >= n) return fn(...args);
    return curryN(fn.bind(this, ...args), n - args.length);
  }
}

module.exports = curryN
