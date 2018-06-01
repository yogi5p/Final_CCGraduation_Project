var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRoutes = require("./routes/auth");
var require = "./models/user";
var require = "./models/dogs";
var require = "./db";
const app = express();
const passport = require("passport");
const passport = require("passport-google-oauth");

mongoose.connect(
  "mongodb://waggs:password@ds149603.mlab.com:49603/waggs",
  function(err) {
    if (err) return console.error(err);
    console.log("THE DB, mongo, is connected, and I ROCK");
  }
);
mongoose.set("debug", true);

// Initialize Passport
var initPassport = require("./passport/init");
initPassport(passport);
//passport init
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth, authRoutes");
//
let google_auth = passport.authenticate("google", {
  failureRedirect: "/login"
});

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

// register Google routes index.js
app.get("/login/google", passport.authenticate("google"));

app.get(
  "/login/google/callback",
  passport.authenticate("google", { failureRedirect: "/users" }),
  function(req, res) {
    res.redirect("/users");
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
