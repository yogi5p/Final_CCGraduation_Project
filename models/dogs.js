var mongoose = require("mongoose");
var schema = mongoose.schema;

var ObjectId = mongoose.Types.ObjectId;
var modelName = "dogs";
var Types = mongoose.Schema.Types;

var dogSchema = new mongoose.Schema({
  name: String,
  dogName: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: Boolean,
    enum: ["Male", "Female"]
  },
  breed: {
    type: String,
    required: true
  },
  size: {
    type: Boolean,
    enum: ["Small", "Medium", "Large"]
  },
  spayedAndNeutered: {
    type: Boolean,
    enum: ["Yes", "No"]
  },
  currentVaccination: {
    type: Boolean,
    enum: ["Yes", "No"]
  },
  image: [String],
  owner: {
    type: Types.ObjectId,
    ref: "owner"
  }
});

dogSchema.pre("save", function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) this.created_at = currentDate;
  next();
});

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
