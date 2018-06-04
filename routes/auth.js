const router = require("express").Router();

//auth login

router.get("/Login", (req, res) => {
  res.render("login");
});
//auth logout
router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});
//auth with google
router.get("/google", (req, res) => {
  //handle with passport
  res.send("logging in with google");
});
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
//top of app.js
const passportSetup = require("/config/passportsetup.js");
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: "https://www.google.com/m8/feeds" })
);
//callback route to redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("Welcome to your Profile");
});
module.exports = router;
