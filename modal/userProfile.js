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


var loginSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let user = mongoose.model('user', userProfile);
let login = mongoose.model('login', loginSchema);

module.exports = user;
module.exports = login;

