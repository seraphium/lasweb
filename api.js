/**
 * Created by zezhang on 2016/11/3.
 */

// RESTFul API used
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

// Underscore
var _ = require('underscore');


/**
 * POST /api/login
 * Login .
 */
app.post('/api/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;


    var parser = new xml2js.Parser();

    //authenticate username/password
    var result = (username == 'test') && (password == '123');
    if (result) {
        req.session.logged = true;
        res.send({ result: 'true' });

    } else {
        res.send({ result: 'false'});
    }
});
