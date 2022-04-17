const router = require('express').Router()

// const apiRoutes = require('./api')

// router.use('/api', apiRoutes)

// router.use((req, res) => res.send('Wrong route!'))

const postsRoutes = require('./posts')
const usersRoutes = require('./users')
const reactionsRoutes = require('./reactions')

app.use('/api/posts', posts)
app.use('/api/users', users)
app.use('/api/reactions', reactions)

module.exports = router