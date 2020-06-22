const rejection = Promise.reject(new Error('This was rejected'))

rejection.catch((err) => console.log(err.message))

const resolution = Promise.resolve('This worked out')

resolution.then(console.log)
