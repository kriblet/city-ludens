'use strict';

const express = require('express');
const routes = require(`${__dirname}/../routes`);
const path = require('path');

let passport = require('passport');
let flash    = require('connect-flash');

let morgan       = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');



module.exports = function(self){
    configure(self);

    self.app.use('/assets', express.static(`${__dirname}/../app/assets`));
    self.logger.info(`Adding static routes for ${self.config.directories.webApp}/assets`);

    self.app.use('/bower_components', express.static(`${__dirname}/../app/bower_components`));
    self.logger.info(`Adding static routes for ${self.config.directories.webApp}/bower_components`);

    self.app.set('views', path.join(__dirname, '/../views'));
    self.logger.info(`Adding views diretory`);

};

function configure(self){


    self.logger.info(`Configuring passport`);
    let passportConfig = require(`${__dirname}/../passport`)(self);
    passportConfig(passport);

// set up our express application
    //self.app.use(morgan('dev')); // log every request to the console
    self.app.use(cookieParser()); // read cookies (needed for auth)
    self.app.use(bodyParser.json()); // get information from html forms
    self.app.use(bodyParser.urlencoded({ extended: true }));

    self.logger.info(`setting view engine`);

    self.app.set('view engine', 'ejs'); // set up ejs for templating
    var session = require("express-session")({
        secret: "my-secret",
        resave: true,
        saveUninitialized: true
    });
    var sharedsession = require("express-socket.io-session");

// Use express-session middleware for express
    self.app.use(session);

// Use shared session middleware for socket.io
// setting autoSave:true
    self.io.use(sharedsession(session, {
        autoSave:true
    }));

    self.app.use(passport.initialize());
    self.app.use(passport.session()); // persistent login sessions
    self.app.use(flash()); // use connect-flash for flash messages stored in session

    routes(self.app, passport);
}