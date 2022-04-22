const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  thoughts: { type: Array, required: false },
  reactions: { type: Array, required: false },
  friends: { type: Array, required: false },
})

const User = mongoose.model('User', userSchema)

const handleError = (err) => console.error(err)

module.exports = User