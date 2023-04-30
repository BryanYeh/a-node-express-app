class Unauthorized extends Error {
  // parent error
  constructor(resource) {
    super()
    this.name = this.constructor.name // good practice
    this.statusCode = 401
    this.message = resource ? resource.message : 'Unauthorized access'
  }
}

module.exports = {
  Unauthorized
}
