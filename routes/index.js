const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.use((req, res) => res.send('Wrong route!'))

// const postsRoutes = require('./api/posts')
// const usersRoutes = require('./api/users')
// const reactionsRoutes = require('./api/reactions')

// app.use('/api/posts', posts)
// app.use('/api/users', users)
// app.use('/api/reactions', reactions)

module.exports = router