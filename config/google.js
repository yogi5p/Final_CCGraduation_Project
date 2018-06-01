// var keys = require('.config/keys');

// passport.use( new GoogleStrategy({
//     //options for google
//     callbackURL:'/auth/google/redirect',
//     clentID: 'keys.google.clientID',
//     clientSecret:'keys.google.clientSecret'
//     }, (accessToken, refreshToken, profile, done)
//     //accessToken acesses info
//     //refresh refreshes token since the expire
//     =>{
//     //passport callback function
//     //check if user already exist and doesnt duplicate users in DB
//     User.findOne({googleId: profile.id}).then((currentUser) =>{
//     if(currentUser){
//     //already exist
//     console.log('user is:', currentUser);
//     } else{
//     //if not create one/creates new users when logging into google
//     new User({
//     username: profile.displayName,
//     googleId: profile.id
//     }).save().then((newUser) => {console.log('new user created:' + newUser);
//     });

//passport/google.js
var GoogleStrategy = require("passport-google").Strategy;
var models = require("../models");
var googleConfig = require("../googlekeys.js");

module.exports = function(passport) {
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: googleConfig.clientID,
        clientSecret: googleConfig.clientSecret,
        callbackURL: googleConfig.callbackUrl
      },

      // github will send back the tokens and profile
      function(access_token, refresh_token, profile, done) {
        models.User.findOrCreate({
          where: { github_auth_id: profile.id },
          defaults: {
            github_auth_id: profile.id,
            name: profile.displayName,
            role: "user",
            email: profile.email
          }
        })
          .spread((user, newUserCreated) => {
            console.log(
              user.get({
                plain: true
              })
            );
            done(null, user);
          })
          .catch(err => {
            console.log(err);
            return done(err, null);
          });
      }
    )
  );
};
