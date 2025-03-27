class ValidationError extends Error {
    constructor(message) {
        super(message)
    }
}

class SystemError extends Error {
    constructor(message) {
        super(message)
    }
}

class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

class CredentialsError extends Error {
    constructor(message) {
        super(message)
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}

class OwnerShipError extends Error {
    constructor(message) {
        super(message)
    }
}

class TimeError extends Error {
    constructor(message) {
        super(message)
    }
}

const errors = {
    ValidationError,
    SystemError,
    DuplicityError,
    CredentialsError,
    NotFoundError,
    OwnerShipError,
    TimeError
}

export default errors