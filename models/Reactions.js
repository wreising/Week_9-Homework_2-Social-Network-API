const mongoose = require('mongoose')

const reactionsSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  reaction: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
})

const Reactions = mongoose.model('Reaction', reactionsSchema)

const handleError = (err) => console.error(err)

module.exports = Reactions