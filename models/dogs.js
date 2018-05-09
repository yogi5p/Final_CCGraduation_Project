const mongoose = require('mongoose');
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
  