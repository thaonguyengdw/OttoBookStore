const { SuccessResponse } = require("../core/success.response")
const { registerUser, authenticateUser } = require("../services/auth.service")

class AuthController {
    register = async( req, res, next ) => {
        new SuccessResponse({
            message: 'Register successfully',
            metadata: await registerUser(req.body.username, req.body.password)
        }).send(res)
    }

    authenticateUser = async( req, res, next ) => {
        new SuccessResponse({
            message: 'Authentication successful',
            metadata: await authenticateUser( req.body.username, req.body.password )
        }).send(res)
    }
}

module.exports = new AuthController()