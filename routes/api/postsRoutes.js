// This is all working

const express = require('express');
const Post = require('../../models/Posts')
const app = express();

// Creates a new post ----------------------------------------------
app.post('/', async ({ body }, res) => {
  try {
    const post = await Post.create(body)
    res.json(post)
  } catch (err) {
    console.error(err);
    res.status(500).json({ err })
  }
})

// Finds all posts ----------------------------------------------
app.get('/', async (req, res) => {
  try {
    const posts = await Post.find({})
    res.json(posts)
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Find post with ID ----------------------------------------------
app.get('/:id', async ({ params: { id } }, res) => {
  try {
    const post = await Post.findOne({ _id: id })
    res.json(post)
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Finds first post that matches the id and deletes ----------------------------------------------
app.delete('/:id', async ({ params: { id } }, res) => {
  try {
    await Post.findByIdAndDelete(id)
    res.json({ message: 'Post successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

// Finds the first post by id and updates that name to the param value ----------------------------------------------
app.put('/:id', async ({ params: { id }, name, body }, res) => {
  try {
    await Post.findByIdAndUpdate(id, body)
    res.json({ message: 'Post successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
})

module.exports = app


// _________________________ Just to be sure

// const express = require('express');
// const Post = require('../../models/Posts')
// const app = express();

// // Creates a new post ----------------------------------------------
// app.post('/', async ({ body }, res) => {
//   try {
//     const post = await Post.create(body)
//     res.json(post)
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err })
//   }
// })

// // Finds all posts ----------------------------------------------
// app.get('/', async (req, res) => {
//   try {
//     const posts = await Post.find({})
//     res.json(posts)
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })

// // Find post with ID ----------------------------------------------
// app.get('/:id', async ({ params: { id } }, res) => {
//   try {
//     const post = await Post.findOne({ _id: id })
//     res.json(post)
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })

// // Finds first post that matches the id and deletes ----------------------------------------------
// app.delete('/:id', async ({ params: { id } }, res) => {
//   try {
//     await Post.findByIdAndDelete(id)
//     res.json({ message: 'Post successfully deleted!' })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })

// // Finds the first post by id and updates that name to the param value ----------------------------------------------
// app.put('/:id', async ({ params: { id }, name, body }, res) => {
//   try {
//     await Post.findByIdAndUpdate(id, body)
//     res.json({ message: 'Post successfully updated!' })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })

// module.exports = app