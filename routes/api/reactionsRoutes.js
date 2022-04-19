const express = require('express');
const Reaction = require('../../models/Reactions')
const app = express();

// Creates a new reaction ----------------------------------------------
app.post('/', async ({ body }, res) => {
  try {
    const reaction = await Reaction.create(body)
    res.json(reaction)
  } catch (err) {
    console.error(err);
    res.status(500).json({ err })
  }
})

// Finds all reactions ----------------------------------------------
app.get('/', async (req, res) => {
  try {
    const reactions = await Reaction.find({})
    res.json(reactions)
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Find reaction with ID ----------------------------------------------
app.get('/:id', async ({ params: { id } }, res) => {
  try {
    const reaction = await Reaction.findOne({ _id: id })
    res.json(reaction)
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Finds first reaction that matches the id and deletes ----------------------------------------------
app.delete('/:id', async ({ params: { id } }, res) => {
  try {
    await Reaction.findByIdAndDelete(id)
    res.json({ message: 'Reaction successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Finds the first post by id and updates that name to the param value ----------------------------------------------
app.put('/:id', async ({ params: { id }, name, body }, res) => {
  try {
    await Reaction.findByIdAndUpdate(id, body)
    res.json({ message: 'Reaction successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = app