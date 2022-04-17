const express = require('express')
const db = require('./config/connection')


// Require model
const { Post } = require('./models')


const PORT = process.env.PORT || 3001
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// Creates a new document
app.post('/posts', async ({ body }, res) => {
  try {
    const post = await Post.create(body)
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds all documents
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({})
    res.json(posts)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Find document with ID
app.get('/posts/:id', async ({ params: { name } }, res) => {
  try {
    const post = await Post.findOne({})
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Find first document with name equal to "Kids"
app.get('/posts/:name', async ({ params: { name } }, res) => {
  try {
    const post = await Post.findOne({ name })
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds first document that matches and deletes
app.delete('/posts/:id', async ({ params: { id } }, res) => {
  try {
    await Post.findByIdAndDelete(id)
    res.json({ message: 'Post successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds the first document with the name with the value equal to 'Kids' and updates that name to the provided URL param value
app.put('/Posts/:id', async ({ params: { id }, body }, res) => {
  try {
    await Post.findByIdAndUpdate(id, body)
    res.json({ message: 'Post successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
