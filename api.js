/**
 * Created by zezhang on 2016/11/3.
 */

// RESTFul API used
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');

// Underscore
var _ = require('underscore');

var User = require('./models/user');

function getRandomId(){
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var nums="";
    for(var i=0;i<32;i++){
        var id = parseInt(Math.random()*61);
        nums+=chars[id];
    }
    return nums;
}

/**
 * POST /api/login
 * Login .
 */
app.post('/api/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    //authenticate username/password

    User.findOne({ username: username, password: password }, function(err, user) {
        if (err) return next(err);

        if (user) {
            req.session.logged = true;
            req.session.username = user.username;
            return res.send({result: true, message: "ok"});
        } else {
            return res.send({result: false, message: "invalid username/password"});

        }
    });

});

/**
 * POST /api/register
 * Register user.
 */
app.post('/api/register', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var telnum = req.body.telnum;

     User.findOne({ username: username }, function(err, user) {
         if (err) return next(err);

         if (user) { //already exists user
             return res.send({result: false, message: "user already exists"});
         }

         var user = new User({
             userId: getRandomId(),
             username: username,
             password: password,
             telnum: telnum,
         });

         user.save(function (err) {
             if (err) return next(err);
             res.send({result: true, message: "ok"});
         });
     });

});

//get session related user info
app.get('/api/userinfo', function(req, res, next) {
        return res.send({username: req.session.username});

});

//logout
app.post('/api/logout', function(req, res, next) {
    req.session.logged = false;
    return res.send({result: true});


});
