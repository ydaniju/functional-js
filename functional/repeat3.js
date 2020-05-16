function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  return function() {
    if (num <= 0) return
    operation()

    if (num % 100 == 0) {
      setTimeout(() => {
        return repeat(operation, --num)
      }, 100);
    } else {
      return repeat(operation, --num)
    }
  }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  while(fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat(operation, num))
}
