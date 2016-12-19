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

var Unit = require('./models/unit');

var Report = require('./models/report');

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

    User.findOne({ Name: username, Password: password }, function(err, user) {
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
    var backendId = req.body.backendId;
    var productId = req.body.productId;
    var userParam = req.body.objects[0];

     User.findOne({ username: userParam.Name }, function(err, user) {
         if (err) return next(err);

         if (user) { //already exists user
             return res.send({result: false, message: "user already exists"});
         }

         var user = new User({
             Id: userParam.Id,
             BackendId: userParam.BackendId,
             Name:  userParam.Name ,
             Password: userParam.Password,
             PhoneNum: userParam.PhoneNum,
             Dept: userParam.Dept,
             Line: userParam.Line,
             Permission: userParam.Permission,
             Remark: userParam.Remark,
         });

         user.save(function (err) {
             if (err) return next(err);
             res.send({result: true, message: "ok"});
         });
     });

});


/**
 * POST /api/sendupdate
 * add/update unit
 */
app.post('/api/sendupdate', function(req, res, next) {
    var type = req.body.type;

    if (type == 'unit') {
        var unitParam = req.body.objects[0];
        Unit.findOne({ Id: unitParam.Id }, function(err, unit) {
            if (err) return next(err);
            if (unit) { //already exists user
                unit.ParendId = unitParam.Id;
                unit.Type = unitParam.Type;
                unit.Name = unitParam.Name;
                unit.Location = unitParam.Location;
                unit.Status = unitParam.Status;
            }
            else {
                unit = new Unit({
                    Id: getRandomId(),
                    ParentId: unitParam.ParentId,
                    Type: unitParam.Type,
                    Name:unitParam.Name,
                    Location: unitParam.Location,
                    Status: unitParam.Status
                });
            }


            unit.save(function (err) {
                if (err) return next(err);
                res.send({result: true, message: "ok"});
            });
        });

    }

});

/**
 *  /api/fetchupdate
 * Get updated data
 */
app.get('/api/fetchupdate', function(req, res, next) {
    var type = req.query.type;

    if (type == 'unit') {
        Unit.find({}, function(err, units) {
            if (err) return next(err);
            res.send({result: true, type: type,objects: units});
        });
    } else if (type == 'report')  {
        let relatedUnitIDs = req.query.unitIDs;
        //test code to generate some report data
        /*
        Unit.find({ Id: { "$in": relatedUnitIDs } }, function(err, units) {
            _.each(units, function(unit) {
                let currentTime = new Date().toLocaleString();
                let report = new Report({
                    Id: getRandomId(),
                    UnitId: unit.Id,
                    Time: currentTime,
                    IsAlert: false,
                    Quota: 200,
                    HasMedia: false
                });

                report.save(function (err) {
                    if (err) return next(err);
                });



            });

            //res.send({result: true, message: "ok"});


        });  */
        Report.find({ UnitId: { "$in": relatedUnitIDs }} , function(err, reports) {
            if (err) return next(err);
            res.send({result: true, type: type,objects: reports});
        });

    }

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
