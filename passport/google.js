//passport/github.js
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var models = require("../models/user");
var googleConfig = require("../googlekeys.js");

module.exports = function(passport) {
  // passport.use(new GoogleStrategy({
  //     clientID: GOOGLE_CLIENT_ID,
  //     clientSecret: GOOGLE_CLIENT_SECRET,
  //     callbackURL: "http://www.example.com/auth/google/callback"
  //   },
  //   function(accessToken, refreshToken, profile, done) {
  //        User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //          return done(err, user);
  //        });
  //   }
  // ));

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
        models.User.findOrCreate({
          where: { googleId: profile.id },
          defaults: {
            googleId: profile.id
            // ,
            // name: profile.displayName,
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
