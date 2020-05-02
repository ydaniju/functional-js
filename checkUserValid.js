function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(user => {
      return goodUsers.some(gUser => user.id === gUser.id)
    })
  };
}

module.exports = checkUsersValid