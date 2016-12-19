/**
 * Created by zezhang on 2016/10/31.
 */
var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
        Id: { type: String, unique: true, index: true },
        UnitId: String,
        Time: String,
        IsAlert: { type: Boolean, default: false },
        Quota: Number,
        HasMedia:  { type: Boolean, default: false }});



module.exports = mongoose.model('Report', reportSchema);