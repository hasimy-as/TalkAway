var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required : true
    },
    displayName: {
        type: String,
        required : true
    },
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    image: {
        type: String,
        reqiured: true
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
});
var User = mongoose.model('user', UserSchema);
module.exports = User;