//passport/google.js
const GoogleStrategy = require("passport-google-auth").Strategy;
var passportGoogle = require("passport-google");
var models = require("../models");
var googleConfig = require("../google.js");

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
      function(accessToken, refreshToken, profile, done) {
        const authId = "google:" + profile.id;
        models.User.findOne({ where: { authId: authId } }, function(err, user) {
          if (err) return done(err, null);
          if (user) return done(null, user);
          models.User.create({
            authId: authId,
            name: profile.displayName,
            role: "user"
          });
        });
      }
    )
  );
};
