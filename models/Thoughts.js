const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
  userName: { type: String, required: true},
  thoughtsName: { type: String, required: true },
  thoughts: { type: String, required: true, length: [1, 2000] },
  dateCreated: { type: Date, default: Date.now },
})

const Thought = mongoose.model('Thought', thoughtSchema)

const handleError = (err) => console.error(err)

module.exports = Thought