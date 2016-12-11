/**
 * Created by zezhang on 2016/10/31.
 */
var mongoose = require('mongoose');

var unitSchema = new mongoose.Schema({
        Id: { type: String, unique: true, index: true },
        ParentId: String,
        Type: Number,
        Name:String,
        Location: String,
        Status: Number
});

module.exports = mongoose.model('Unit', unitSchema);