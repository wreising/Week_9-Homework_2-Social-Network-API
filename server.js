const express = require('express')
const db = require('./config/connection')
const routes = require('./routes') // added for test

const { Post, Reactions, User } = require('./models')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// console.log(routes);

app.use(routes) // this is the routes file - we'll see - added for test

// // Creates a new post
// app.post('/posts', async ({ body }, res) => {
//   try {
//     const post = await Post.create(body)
//     res.json(post)
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })



// // Finds all posts
// app.get('/posts', async (req, res) => {
//   try {
//     const posts = await Post.find({})
//     res.json(posts)
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })



// // Find post with ID
// app.get('/posts/:id', async ({ params: { id } }, res) => {
//   try {
//     const post = await Post.findOne({})
//     res.json(post)
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })



// // Finds first post that matches the id and deletes
// app.delete('/posts/:id', async ({ params: { id } }, res) => {
//   try {
//     await Post.findByIdAndDelete(id)
//     res.json({ message: 'Post successfully deleted!' })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })



// // Finds the first post bu id and updates that name to the param value
// app.put('/Posts/:id', async ({ params: { id }, postName, postBody }, res) => {
//   try {
//     await Post.findByIdAndUpdate(id, body)
//     res.json({ message: 'Post successfully updated!' })
//   } catch (err) {
//     res.status(500).json({ err })
//   }
// })

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Social Network API server running on port ${PORT}!`)
  })
})
