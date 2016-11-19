/**
 * Created by zezhang on 2016/10/31.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, index: true },
    username: String,
    password: String,
    telnum: String
});

module.exports = mongoose.model('User', userSchema);