var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require("./models/user");
require("./models/dogs");
// require("./db");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

var app = express();

// Configuring Passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
var initPassport = require("./passport/init");
initPassport(passport);

mongoose.connect(
  "mongodb://waggs:password@ds149603.mlab.com:49603/waggs",
  function(err) {
    if (err) return console.error(err);
    console.log("THE DB, mongo, is connected, and I ROCK");
  }
);
mongoose.set("debug", true);

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

// register Google routes app.js
app.get("/auth/google", passport.authenticate("google"));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/", routes.index);
app.post("/create", routes.create);

app.use("/", indexRouter);
app.use("/users", usersRouter);

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
