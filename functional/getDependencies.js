function getDependencies(tree, result = new Set) {
  var dependencies = tree && tree.dependencies || {};

  Object.keys(dependencies).forEach(function(dependency) {
    var key = `${dependency}@${tree.dependencies[dependency].version}`;
    result.add(key);
    getDependencies(tree.dependencies[dependency], result)
  });

  return Array.from(result).sort()
}

module.exports = getDependencies
