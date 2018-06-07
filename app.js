var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var User = require("./models/user");

var url = "mongodb://waggs:password@ds149603.mlab.com:49603/waggs";
var app = express();

mongoose.connect(url, function(err, db) {
  if (err) return console.error(err);
  console.log("THE DB, mongo, is connected, and I ROCK");
});

mongoose.set("debug", true);

const passport = require("passport");

var app = express();

// Configuring Passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
var initPassport = require("./passport/init");
initPassport(passport);

//Custom Middleware

/* this checks to see passport has deserialized 
and appended the user to the request */

const isAuth = (req, res, next) => {
  console.log("=======Authorization Check");
  if (req.user) {
    return next();
  } else return res.render("login", {});
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

const GoogleStrategy = require("passport-google-oauth20").Strategy;
var googleConfig = require("./googlekeys.js");
// Creates a new instance of the GoogleStrategy
// In the constructor tell it how to handle this
// Client ID and Client Secret
// callbackURL - string is the route that the user
// is sent to after they grant permission to our app

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: googleConfig.clientID,
      clientSecret: googleConfig.clientSecret,
      callbackURL: googleConfig.callbackUrl,
      proxy: true
    },

    // google will send back the tokens and profile
    function(accessToken, tokenSecret, profile, done) {
      console.log("access token", accessToken);
      console.log("refresh token", tokenSecret);
      console.log("profile", profile);
      User.findOne({ googleId: profile.id }, function(err, user) {
        if (!user) {
          console.log("I was called");
          let newUser = new User({
            googleId: profile.id,
            username: profile.displayName,
            role: "user",
            email: profile.email
          });
          newUser
            .save()
            .then(user => {
              return done(err, user);
            })
            .catch(err => {
              return done(err, false);
            });
        } else {
          return done(err, user);
        }
      });
    }
  )
);

// register Google routes app.js
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/Amenities");
  }
);

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
