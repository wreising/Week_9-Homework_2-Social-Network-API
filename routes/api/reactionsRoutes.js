const express = require('express')
const Reactions = express();

// Creates a new post
Reactions.post('/', async ({ body }, res) => {
  try {
    const reaction = await Reaction.create(body)
    res.json(reaction)
  } catch (err) {
    console.error(err);
    res.status(500).json({ err })
  }
})



// Finds all reactions
Reactions.get('/reactions', async (req, res) => {
  try {
    const reactions = await Reaction.find({})
    res.json(reaction)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Find reaction with ID
Reactions.get('/reactions/:id', async ({ params: { id } }, res) => {
  try {
    const reaction = await Reaction.findOne({})
    res.json(reaction)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds first reaction that matches the id and deletes
Reactions.delete('/reactions/:id', async ({ params: { id } }, res) => {
  try {
    await Reaction.findByIdAndDelete(id)
    res.json({ message: 'Reaction successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds the first reaction bu id and updates that name to the param value
Reactions.put('/reactions/:id', async ({ params: { id }, postName, postBody }, res) => {
  try {
    await Reaction.findByIdAndUpdate(id, body)
    res.json({ message: 'Reaction successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = Reactions