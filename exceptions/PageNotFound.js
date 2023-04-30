const { NotFound } = require('./NotFound')

class PageNotFound extends NotFound {
  constructor(resource) {
    super(resource)
    this.message = `Route not found: '${resource.path}'`
  }
}

module.exports = {
  PageNotFound
}
