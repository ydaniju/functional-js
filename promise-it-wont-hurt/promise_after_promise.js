first()
  .then(val => second(val))
  .then(console.log)

/*
  this is also

  first()
    .then(function(val) {
      return second(val)
    })
    .then(console.log)
*/
