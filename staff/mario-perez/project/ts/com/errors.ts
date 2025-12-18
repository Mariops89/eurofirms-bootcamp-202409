class DuplicityError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }
}

class CredentialsError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }
}

class NotFoundError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }
}

class SystemError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }
}

class OwnerShipError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }

}

class ValidationError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }
}

class TimeError extends Error {
    constructor(message: string) {
        super(message)

        this.name = this.constructor.name
    }
}

export {
    DuplicityError,
    CredentialsError,
    NotFoundError,
    SystemError,
    OwnerShipError,
    ValidationError,
    TimeError
}