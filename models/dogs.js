<<<<<<< HEAD
const mongoose = require('');
const schema = mongoose.schema;

const dogSchema = newSchema({
    dogName: {
        type: string,
        required: true,
        unique: true
    },
    gender:{
        type: boolean,
        enum:['Male', 'Female']
    },
    breed:{
        type: string,
        required: true
    },
    size:{
        type: boolean,
        enum: ['Small', 'Medium', 'Large']
    },
    spayedAndNeutered: {
        type: boolean,
        enum: ['Yes', 'No']
    },
    currentVaccination:{
        type: boolean,
        enum: ['Yes', 'No']
    },
    image: [string],
    owner:[objectId]
});

dogSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;
    if(!this.created_at)
    this.created_at = currentDate;
    next();
});

dogs.find({dogName: '', function(err, dogs)});
if (err) throw err;
console.log(dogs);

dogs.findById({_id, function(err,dogs)});
if(err) throw err;
dogs.save(function(err){
    if(err) throw err;

});

dogs.find({ dogName: '' }, function(err, dogs) {
    if (err) throw err;
    dogs.remove(function(err) {
      if (err) throw err;
  
      console.log('Dogs deleted!');
    });
  });
  
mongoose.models("dogs", dogSchema);
=======
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
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
