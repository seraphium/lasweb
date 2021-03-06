
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Db used
var mongoose = require('mongoose');
var config = require('./config');

// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

// DB connection
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

//Express
app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(cookieParser('bc3000'));

//session
var connect = require('connect');
var SessionStore = require("session-mongoose")(connect);
var store = new SessionStore({
    url: config.database,
    interval: 120000 // expiration check worker run interval in millisec (default: 60000)
});

app.use(session({
    store: store,
    secret: 'keyboard cat',
    cookie: { maxAge: 900000 }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Api route
require('./api');

//React route
app.use(function(req, res) {

        Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {

        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            console.log("redirect");
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var  html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var  page = swig.renderFile('views/index.html', { html: html});

            if (!req.session.logged && req.url != '/login' && req.url != '/register') {
                console.log("redirect to login");
                return res.redirect('/login');
            }
            console.log("send home page");
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found');
        }
    });
});



//Socket IO
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});


