class ApplicationError extends Error {
  constructor(message) {
    super(message);
    // name is set to the name of the class
    this.name = this.constructor.name;
  }
}

class ValidationError extends ApplicationError {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
  }
}
