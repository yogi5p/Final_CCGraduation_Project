//passport/google.js
// var models = require("../models");
var User = require("../models/user");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
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

      // google will send back the tokens and profile
      function(access_token, refresh_token, profile, done) {
        User.findOrCreate({
          where: { googleId: profile.id },
          defaults: {
            googleId: profile.id
            // ,
            // username: profile.displayName,
            // role: "user",
            // email: profile.email
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
