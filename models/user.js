var mongoose = require("mongoose");
var schema = mongoose.schema;
var JWT = require("JSONWebToken");


var Types = mongoose.Schema.Types;
var userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String
  },
  password: {
    type: String
  },
  emailAddress: [String],
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: Number
  },
  image: [String],

  dogs: [
    {
      type: Types.ObjectId,
      ref: "dogs"
    }
  ]
});

var User = mongoose.model("User", userSchema);

// var User = new User({
//   name: "",
//   username: "",
//   password: "",
//   emailAddress: "",
//   city: "",
//   state: "",
//   zipcode: ""
// });

// User.save(function(err) {
//   console.log("user created!");
//   if (err) {
//     console.error(err);
//   }
// });

// User.find({}, function(err, users) {
//   if (err) throw err;
//   console.log(users);
// });
// User.findById(_id, function(err, user) {
//   if (err) throw err;
//   console.log(user);
// });

// User.find({ username: "" }, function(err, user) {
//   if (err) throw err;
//   User.remove(function(err) {
//     if (err) throw err;

//     console.log("User deleted!");
//   });
// });

// User.findByIdAndRemove(_id, function(err) {
//   if (err) throw err;
//   console.log("User deleted!");
// });

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
  if (!user.isModified("password")) return next();
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

module.exports = mongoose.model("User", userSchema);
