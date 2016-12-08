/**
 * Created by zezhang on 2016/10/31.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Id: { type: String, unique: true, index: true },
    Name: String,
    Password: String,
    PhoneNum: String,
    Dept: String,
    Line: String,
    Permission: Number,
    Remark: String,
    BackendId: String
});

module.exports = mongoose.model('User', userSchema);