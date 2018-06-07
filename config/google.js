var GoogleStrategy = require("passport-google-oauth").OAuthStrategy;
var passport = require("passport");

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

      // google will send back the tokens and profile
      function(token, tokenSecret, profile, done) {
        models.User.findOrCreate({ googleId: profile.id }, function(err, user) {
          return done(err, user);
        });
      }
    )
  );
};
