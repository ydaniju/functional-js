function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((counter, word) => {
    counter[word] = ++counter[word] || 1
    return counter;
  }, {})
}

module.exports = countWords