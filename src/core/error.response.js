'use strict'

const StatusCode = {
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401
}

const ReasonStatusCode = {
    FORBIDDEN: 'Bad request error',
    NOT_FOUND: "Not Found",
    UNAUTHORIZED: "Unauthorized",
}

class ErrorResponse extends Error {

    constructor(message, status) {
        super(message)
        this.status = status
    }
}

class NotFoundError extends ErrorResponse{
    constructor(message = ReasonStatusCode.NOT_FOUND, statusCode = StatusCode.NOT_FOUND)
    {
        super(message, statusCode)
    }
}

class ForbiddenError extends ErrorResponse{
    constructor(message = ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN)
    {
        super(message, statusCode)
    }
}

class AuthFailureError extends ErrorResponse{
    constructor(message = ReasonStatusCode.UNAUTHORIZED, statusCode = StatusCode.UNAUTHORIZED)
    {
        super(message, statusCode)
    }
}

module.exports = {
    NotFoundError,
    ForbiddenError,
    AuthFailureError
}
