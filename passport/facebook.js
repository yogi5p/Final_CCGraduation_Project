//passport/facebook.js
const FacebookStrategy = require("passport-facebook").Strategy;
var models = require("../models");
var fbConfig = require("../fb.js");

module.exports = function(passport) {
  passport.use(
    "facebook",
    new FacebookStrategy(
      {
        clientID: fbConfig.clientID,
        clientSecret: fbConfig.clientSecret,
        callbackURL: fbConfig.callbackUrl
      },

      // facebook will send back the tokens and profile
      function(accessToken, refreshToken, profile, done) {
        const authId = "facebook:" + profile.id;
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
