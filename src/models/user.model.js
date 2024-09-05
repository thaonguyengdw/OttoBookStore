'use strict'

const { model, Schema } = require('mongoose')

const bcrypt = require('bcryptjs')

const DOCUMENT_NAME = 'User'

const COLLECTION_NAME = 'Users'

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
},
{
    collection: COLLECTION_NAME,
    timestamps: true,
})

// Document middleware: run before .save() a user

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt)
    next()
})

module.exports = model(DOCUMENT_NAME, userSchema)