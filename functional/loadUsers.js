function loadUsers(userIds, load, done) {
  var total = 0;
  var users = [];

  userIds.forEach(function(id, i) {
    load(id, function(user) {
      user.push(user);
      if (++total === userIds.length) return done(users)
    });
  })
}

module.exports = loadUsers
