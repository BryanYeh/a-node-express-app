const { NotFound } = require('./NotFound')

class ResourceNotFound extends NotFound {
  constructor(resource) {
    super(resource)
    this.message = `Resource not found: '${resource.name}' with id: ${resource.id}`
  }
}

module.exports = {
  ResourceNotFound
}
