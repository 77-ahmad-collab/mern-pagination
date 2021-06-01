const mongoose = require("mongoose");

const postschema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "please enter the body"],
  },
  author: String,
  title: String,
});

const posts = mongoose.model("post", postschema);

module.exports = posts;
