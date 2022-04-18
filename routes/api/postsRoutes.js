const express = require('express');
const Posts = express();


// Creates a new post
Posts.post('/', async ({ body }, res) => { // not having /posts at least gives an error
  try {
    // const post = await Post.create(body)
    // res.json(post)
    res.json({
      success: "Hooray!"
    })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds all posts
Posts.get('/', async (req, res) => { // '/posts' ?? or just '/'
  try {
    // const posts = await Post.find({})
    // res.json(posts)
    res.json({
      message: 'Attempting a get request'
    })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Find post with ID
Posts.get('/:id', async ({ params: { id } }, res) => {
  try {
    // const post = await Post.findOne({})
    const post = {
      id
    }
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds first post that matches the id and deletes
Posts.delete('/:id', async ({ params: { id } }, res) => {
  try {
    await Post.findByIdAndDelete(id)
    res.json({ message: 'Post successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})



// Finds the first post bu id and updates that name to the param value
Posts.put('/:id', async ({ params: { id }, postName, postBody }, res) => {
  try {
    await Post.findByIdAndUpdate(id, body)
    res.json({ message: 'Post successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = Posts