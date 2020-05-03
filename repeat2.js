function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return

  operation()

  if (num % 20 === 0) {
    setTimeout(() => {
      return repeat(operation, --num)
    }, 100);
  } else {
    return repeat(operation, --num)
  }
}

module.exports = repeat
