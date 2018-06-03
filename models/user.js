var mongoose = require("mongoose");
var schema = mongoose.schema;
var JWT = require("JSONWebToken");
var User = require("...models/user");

//register form lp
router.get("/Signup", function(req, res) {
  res.render("Signup");
}); //using proj name
app.post("/Signup", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
});
var userSchema = new mongoose.Schema({
  username: String,
  googleId: String, //will identifies returning users
  password: {
    type: String,
    required: true
  },
  emailAddress: [String],
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: number,
    required: true
  },
  dogs: [objectId],
  image: [String]
});

userSchema.pre("save", function(next) {
  var currentDate = new date();
  this.updated_at = currentDate;
  if (!this.created_at) this.created_at = currentDate;
  next();
});

var user = require();
var newUser = user({
  name: "",
  username: "",
  password: ""
});

newUser.save(function(err) {
  if (err) throw err;
  console.log("user created!");
});

User.find({}, function(err, users) {
  if (err) throw err;
  console.log(users);
});
User.findById(_id, function(err, user) {
  if (err) throw err;
  console.log(user);
});

User.find({ username: "" }, function(err, user) {
  if (err) throw err;
  user.remove(function(err) {
    if (err) throw err;

    console.log("User deleted!");
  });
});

User.findByIdAndRemove(_id, function(err) {
  if (err) throw err;
  console.log("User deleted!");
});

userSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    image: this.image || " ",
    name: this.name,
    token: this.generateJWT()
  };
};

userSchema.pre("save", function(next) {
  var user = this;
  if (!user.ismodified("password")) return next();
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  user.password = hash;
  next();
});

userSchema.methods.generateJWT = function() {
  var today = new date();
  var exp = new date(today);
  exp.setDate(today.getDate() + 60);
};

mongoose.models("user", userSchema);
