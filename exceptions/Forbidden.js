class Forbidden extends Error {
  // parent error
  constructor(resource) {
    super()
    this.name = this.constructor.name // good practice
    this.statusCode = 403
    this.message = resource ? resource.message : 'Forbidden Access'
  }
}

module.exports = {
  Forbidden
}
