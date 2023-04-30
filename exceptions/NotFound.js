class NotFound extends Error {
  // parent error
  constructor() {
    super()
    this.name = this.constructor.name // good practice

    this.statusCode = 404
  }
}

module.exports = {
  NotFound
}
