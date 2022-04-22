const mongoose = require('mongoose')

const reactionsSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  thoughtsName: { type: String, required: true, length: [1, 2000] },
  reactions: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
})

const Reactions = mongoose.model('Reaction', reactionsSchema)

const handleError = (err) => console.error(err)

module.exports = Reactions