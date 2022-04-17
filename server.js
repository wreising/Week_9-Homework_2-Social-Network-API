const express = require('express')
const db = require('./config/connection')
const routes = require('./routes') // added for test

const { Post, Reactions, User } = require('./models')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes) // this is the routes file - we'll see - added for test

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Social Network API server running on port ${PORT}!`)
  })
})