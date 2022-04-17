const router = require('express').Router()
const posts = require('./posts')
const reactions = require('./reactions')
const users = require('./users')

router.use('/posts', posts)
router.use('/reactions', reactions)
router.use('/users', users)

module.exports = router;