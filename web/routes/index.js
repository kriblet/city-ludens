module.exports = function(app, passport) {

    // tpl routes ==============================================================
    app.get('/tpl/dashboard.html', isLoggedIn, function(req, res){
        res.render('tpl/dashboard', {
            user : req.user
        });
    });

    app.get('/tpl/_=_', isLoggedIn, function(req, res){
        res.render('tpl/dashboard', {
            user : req.user
        });
    });

    app.get('/tpl/:folder/:tpl', isLoggedIn, function(req, res){
        res.render(`tpl/${req.params.folder}/${req.params.tpl}`, {
            user : req.user
        });
    });

    app.get('/tpl/:tpl', isLoggedIn, function(req, res){
        res.render(`tpl/${req.params.tpl}`, {
            user : req.user
        });
    });

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        if (!req.user) {
            res.render('index.ejs', {message: req.flash('loginMessage')});
        }else{
            res.redirect('/profile');
        }
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/api/login', passport.authenticate('token'));


    // SIGNUP =================================
    // show the signup form
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function(req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // facebook -------------------------------

    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
        passport.authorize('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        let user            = req.user;
        user.local    = undefined;
        if (!user.local.email && !user.google.id && !user.facebook.id && !user.twitter.id){
            user.remove((err)=>{
                req.user = undefined;
                return res.redirect('/');
            });
        }
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        let user            = req.user;
        user.facebook = undefined;
        if (!user.local.email && !user.google.id && !user.facebook.id && !user.twitter.id){
            user.remove((err)=>{
                req.user = undefined;
                return res.redirect('/');
            });
        }
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        let user           = req.user;
        user.twitter = undefined;
        if (!user.local.email && !user.google.id && !user.facebook.id && !user.twitter.id){
            user.remove((err)=>{
                req.user = undefined;
                return res.redirect('/');
            });
        }
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        let user          = req.user;
        user.google = undefined;
        if (!user.local.email && !user.google.id && !user.facebook.id && !user.twitter.id){
            user.remove((err)=>{
                req.user = undefined;
                return res.redirect('/');
            });
        }
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        req.session.user = req.user;
        req.session.save();
        return next();
    }

    res.redirect('/');
}
