const express = require('express')
const router = express()

const posts = require('./postsRoutes')
const reactions = require('./reactionsRoutes')
const users = require('./usersRoutes')

router.use('/posts', posts)
router.use('/reactions', reactions)
router.use('/users', users)

module.exports = router