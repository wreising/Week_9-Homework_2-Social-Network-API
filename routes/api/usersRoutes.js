const express = require('express');
const User = require('../../models/Users')
const app = express();

// Creates a new users ----------------------------------------------
app.post('/', async ({ body }, res) => {
  try {
    const user = await User.create(body)
    res.json(user)
  } catch (err) {
    console.error(err);
    res.status(500).json({ err })
  }
})

// Finds all users ----------------------------------------------
app.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Find user with ID ----------------------------------------------
app.get('/:id', async ({ params: { id } }, res) => {
  try {
    const user = await User.findOne({ _id: id })
    res.json(user)
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Finds first user that matches the id and deletes ----------------------------------------------
app.delete('/:id', async ({ params: { id } }, res) => {
  try {
    await User.findByIdAndDelete(id)
    res.json({ message: 'User successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Finds the first user by id and updates that name to the param value ----------------------------------------------
app.put('/:id', async ({ params: { id }, name, body }, res) => {
  try {
    await User.findByIdAndUpdate(id, body)
    res.json({ message: 'User successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = app