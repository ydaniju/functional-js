module.exports = function arrayMap(arr, fn) {
  return arr.reduce((acc, curr, index, arr) => {
    return [...acc, fn.call(null, curr, index, arr)];
  }, []);
}
