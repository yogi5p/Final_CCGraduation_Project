var mongoose = require("mongoose");
var schema = mongoose.schema;

var ObjectId = mongoose.Types.ObjectId;
var modelName = "dogs";
var Types = mongoose.Schema.Types;

var dogSchema = new mongoose.Schema({
  dogName: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  spayedAndNeutered: {
    type: String,
    required: true
  },
  currentVaccination: {
    type: String,
    required: true
  },
  image: [String],
  owner: {
    type: Types.ObjectId,
    ref: "owner"
  }
});

var Dogs = mongoose.model("Dogs", dogSchema);

// var Dogs = new Dogs({
//   dogName: "",
//   gender: "",
//   breed: "",
//   size: "",
//   spayedAndNeutered: "",
//   currentVaccination: ""
// });

// Dogs.save(function(err) {
//   console.log("dog created!");
//   if (err) {
//     console.error(err);
//   }
// });

// dogSchema.pre("save", function(next) {
//   var currentDate = new Date();
//   this.updated_at = currentDate;
//   if (!this.created_at) this.created_at = currentDate;
//   next();
// });

// dogs.find({ dogName: "" }, function(err, dogs) {
//   if (err) throw err;
//   console.log(dogs);
// });

// dogs.findById({ _id }, function(err, dogs) {
//   if (err) throw err;
//   dogs.save(function(err) {
//     if (err) throw err;
//   });
// });

// dogs.find({ dogName: "" }, function(err, dogs) {
//   if (err) throw err;
//   dogs.remove(function(err) {
//     if (err) throw err;

//     console.log("Dogs deleted!");
//   });
// });

// mongoose.models("dogs", dogSchema);
module.exports = mongoose.model("dogs", dogSchema);
