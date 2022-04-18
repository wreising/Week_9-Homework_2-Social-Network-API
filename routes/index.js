const express = require('express')
const router = express();
const apiRoutes = require('./api')

router.use('/api', apiRoutes)


// router.use((req, res) => {
//   console.log('we made it here!');
//   res.send('Why? Wrong route!')
// }
// )

// Creates a new post
// router.post('/', async ({ body }, res) => { // not having /posts at least gives an error
//   console.log('we made it here guys!')
//   try {
//     // const post = await Post.create(body)
//     res.json({
//       success: "Be proud, everyone!"
//     })
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err })
//   }
// })

// const postsRoutes = require('./api/posts')
// const usersRoutes = require('./api/users')
// const reactionsRoutes = require('./api/reactions')

// router.use('/api/posts', postRoutes)
// app.use('/api/users', users)
// app.use('/api/reactions', reactions)

module.exports = router