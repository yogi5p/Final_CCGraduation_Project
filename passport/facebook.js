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
        models.User.findOrCreate({
          where: { authId: profile.id },
          defaults: {
            authId: profile.id,
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
