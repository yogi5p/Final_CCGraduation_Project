var mongoose = require("mongoose");
var schema = mongoose.schema;

var postschema = new mongoose.schema({
  title: string,
  postedBy: {
    type: mongoose.schema.types.objectId,
    ref: "user"
  },
  comments: [
    {
      text: string,
      postedBy: {
        type: mongoose.schema.types.objectId,
        ref: "user"
      }
    }
  ]
});

post.save(function(error) {
  if (!error) {
    post
      .find({})
      .populate("postedBy")
      .populate("comemnts.postedBy")
      .exec(function(error, posts) {
        console.log(JSON.stringify(posts, null, "t"));
      });
  }
});

module.exports = mongoose.models("post", postSchema);
