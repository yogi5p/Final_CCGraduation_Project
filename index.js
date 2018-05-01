const express = require("express");
const sequelize = require("sequelize");
const sqlite = require("sqlite3");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const hostname = "localhost";
const port = 3030;

const app = express();

// Configuring Passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
var initPassport = require("./passport/init");
initPassport(passport);

app.set("port", process.env.PORT || 3030);

//Configuring the app to use the right templeting engine
const handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", (request, response) => {
  response.render("home");
});

let fb_auth = passport.authenticate("facebook", { failureRedirect: "/login" });

//Custom Middleware

/* this checks to see passport has deserialized 
and appended the user to the request */
const isAuth = (req, res, next) => {
  console.log("=======Authorization Check");
  if (req.user) {
    return next();
  } else return res.render("login", {});
};

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// register facebook routes index.js
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get("/login/facebook", passport.authenticate("facebook"));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get(
  "/login/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.get("/account", (req, res) => {
  if (!req.session.passport.user) return res.redirect(303, "/unauthorized");
  res.render("account");
});

function adminOnly(req, res) {
  const user = req.session.passport.user;
  if (user && req.role === "admin") return next();
  res.redirect(303, "/unauthorized");
}

app.get("/admin", adminOnly, (req, res) => {
  res.render("admin");
});

app.get("/profile", isAuth, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("profile", {
    user: req.user
  });
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.use((request, response) => {
  response.status(404);
  response.render("404");
});

app.listen(app.get("port"), () => {
  console.log(
    "Express started on https://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
