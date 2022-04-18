const router = require('express').Router()
const apiRoutes = require('./api')
const postRoutes = require('./api/postsRoutes');

// router.use('/api', apiRoutes)


router.use((req, res) => {
  console.log('we made it here!');
  res.send('Why? Wrong route!')
}
)

// const postsRoutes = require('./api/posts')
// const usersRoutes = require('./api/users')
// const reactionsRoutes = require('./api/reactions')

router.use('/api/posts', postRoutes)
// app.use('/api/users', users)
// app.use('/api/reactions', reactions)

module.exports = router