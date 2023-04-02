class ServerError extends Error {
  // parent error
  constructor(resource) {
    super()
    this.name = this.constructor.name // good practice
    this.statusCode = 500
    this.message = resource ? resource.message : 'Server Error'
  }
}

module.exports = {
    ServerError
}
