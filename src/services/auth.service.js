const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

const registerUser = async (username, password) => {
    if (!username || !password) {
        throw new Error('Username and password are required')
    }
    const user = new User({ username, password}) ;
    return await user.save()
}

const authenticateUser = async (username, password) => {
    const user = await User.findOne({ username })
    const match = bcrypt.compare(password, user.password)
    if(user && match) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token
    }
    throw new Error('Invalid credentials')
}

module.exports = {
    registerUser,
    authenticateUser
}