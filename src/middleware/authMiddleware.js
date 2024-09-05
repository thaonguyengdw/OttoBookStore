const jwt = require('jsonwebtoken')
const { AuthFailureError, ForbiddenError } = require('../core/error.response')

const authenticate = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) throw new AuthFailureError('Unauthenticated')

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) throw new ForbiddenError('Permission denied')
        req.user = user;
        next();
    })
}

module.exports = { authenticate }