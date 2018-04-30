//init.js in ("./passport")
var facebook = require("./facebook");
var models = require("../models");

module.exports = function(passport) {
  // Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser(function(user, done) {
    console.log("============== serializing user: ");
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log("============== DeSerializing user: ");
    models.User.findAll({
      where: {
        userId: id
      }
    })
      .then(user => {
        done(null, user);
      })
      .catch(err => done(err, null));
  });

  // Setting up Passport Strategies for facebook
  facebook(passport);
};
