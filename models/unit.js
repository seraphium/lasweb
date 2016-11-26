/**
 * Created by zezhang on 2016/10/31.
 */
var mongoose = require('mongoose');

var unitSchema = new mongoose.Schema({
    unitId: { type: String, unique: true, index: true },
    parentId: String,
    type: Number,
    name: String,
    location: String,
    status: Number
});

module.exports = mongoose.model('Unit', unitSchema);