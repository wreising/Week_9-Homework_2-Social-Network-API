const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  body: { type: String, required: true, length: [1, 2000] },
  dateCreated: { type: Date, default: Date.now },
})

const Post = mongoose.model('Post', postSchema)

const handleError = (err) => console.error(err)

module.exports = Post