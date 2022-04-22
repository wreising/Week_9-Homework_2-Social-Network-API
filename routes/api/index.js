const express = require('express')
const router = express()

const thoughts = require('./thoughtsRoutes')
const reactions = require('./reactionsRoutes')
const users = require('./usersRoutes')

router.use('/thoughts', thoughts)
router.use('/reactions', reactions)
router.use('/users', users)

module.exports = router