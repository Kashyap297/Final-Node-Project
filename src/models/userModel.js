const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    passord: {
        type: String
    },
    role : {
        type : String,
        default : 'user'
    }
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)