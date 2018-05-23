var mongoose = require("mongoose");
var schema = mongoose.schema;
var JWT = require("JSONWebToken");

var ObjectId = mongoose.Types.ObjectId;
var Types = mongoose.Schema.Types;
var userSchema = new mongoose.Schema({
  // _id: userSchema.Types.ObjectId,
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
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
    type: Number,
    required: true
  },
  image: [String],
  // dogs: [{ type: userSchema.Types.ObjectId, ref: "dogName" }]
  dogs: [
    {
      type: Types.ObjectId,
      ref: "dogs"
    }
  ]
});

var User = mongoose.model("User", userSchema);

userSchema.pre("save", function(next) {
  var currentDate = new date();
  this.updated_at = currentDate;
  if (!this.created_at) this.created_at = currentDate;
  next();
});

// var user = require();
var newUser = User({
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
// User.findById(_id, function(err, user) {
//   if (err) throw err;
//   console.log(user);
// });

User.find({ username: "" }, function(err, user) {
  if (err) throw err;
  user.remove(function(err) {
    if (err) throw err;

    console.log("User deleted!");
  });
});

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

// mongoose.models("user", userSchema);
module.exports = mongoose.model("User", userSchema);
