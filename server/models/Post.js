const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  summary: {type: String, required: true},
  content: {type: String, required: true},
  img: {type: String, required: true},
}, {
  timestamps: true,
})

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;