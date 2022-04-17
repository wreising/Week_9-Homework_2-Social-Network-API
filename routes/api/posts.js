const Posts = require('express').Router()


// Creates a new post
Posts.post('/posts', async ({ body }, res) => {
  try {
    const post = await Post.create(body)
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds all posts
Posts.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({})
    res.json(posts)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Find post with ID
Posts.get('/posts/:id', async ({ params: { id } }, res) => {
  try {
    const post = await Post.findOne({})
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds first post that matches the id and deletes
Posts.delete('/posts/:id', async ({ params: { id } }, res) => {
  try {
    await Post.findByIdAndDelete(id)
    res.json({ message: 'Post successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds the first post bu id and updates that name to the param value
Posts.put('/posts/:id', async ({ params: { id }, postName, postBody }, res) => {
  try {
    await Post.findByIdAndUpdate(id, body)
    res.json({ message: 'Post successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = Posts