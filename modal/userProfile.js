var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userProfile = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true
    }
});

let user = mongoose.model('user', userProfile);
module.exports = user;
