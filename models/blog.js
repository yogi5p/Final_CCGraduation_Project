var mongoose = require("mongoose");
var schema = mongoose.schema;
var Blog = require("./Blog");

var ObjectId = mongoose.Types.ObjectId;
var modelName = "blog";
var Types = mongoose.Schema.Types;

var blogSchema = new mongoose.Schema({
  username: { type: String },
  useremail: { type: String },
  blogCategory: { type: String },
  blogtext: [{ type: String }],
  _user: { type: Types.ObjectId, ref: "user" }
});

Blog.save(function(error) {
  if (!error) {
    Blog.find({})
      .populate("postedBy")
      .populate("comments.postedBy")
      .exec(function(error, blog) {
        console.log(JSON.stringify(blog, null, "\t"));
      });
  }
});

module.exports.createBlog = (username, newBlog, callback) => {
  Author.findOne({ username: username }).then(
    user => {
      newBlog.user = user._id;
      user.posts.push(newBlog);
      newBlog.save().then(err, auth);
      {
        user.save(callback);
      }
    },
    err => {
      if (err) throw err;
    }
  );
};
module.exports = mongoose.model("blog", blogSchema);
