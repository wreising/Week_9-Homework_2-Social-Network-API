const express = require('express');
const Users = express();


// Creates a new user
Users.post('/', async ({ body }, res) => {
  try {
    const user = await User.create(body)
    res.json(user)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds all users
Users.get('/users', async (req, res) => {
  try {
    const user = await User.find({})
    res.json(user)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Find user with ID
Users.get('/users/:id', async ({ params: { id } }, res) => {
  try {
    const user = await User.findOne({})
    res.json(user)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds first user that matches the id and deletes
Users.delete('/users/:id', async ({ params: { id } }, res) => {
  try {
    await User.findByIdAndDelete(id)
    res.json({ message: 'Reaction successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds the first user by id and updates that name to the param value
Users.put('/users/:id', async ({ params: { id }, postName, postBody }, res) => {
  try {
    await User.findByIdAndUpdate(id, body)
    res.json({ message: 'Reaction successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = Users