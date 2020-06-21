const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300);
})

const onReject = (error) => console.log(error.message)

promise.then((data) => console.log(data), onReject)
