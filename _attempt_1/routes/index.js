// sicialPosts

const router = require('express').Router()
const socialPosts = require('../models')

router.post('/socialPosts', async ({ body }, res) => {
  try {
    const socialPosts = await socialPosts.create(body)
    res.json(socialPosts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/socialPosts', async (req, res) => {
  try {
    const socialPosts = await socialPosts.find({})
    res.json(socialPosts)
  } catch (err) {
    res.status(500).json({ err })
  }
})

router.get('/socialPosts/:id', async ({ params: { id } }, res) => {
  try {
    const socialPosts = await socialPosts.find({})
    res.json(socialPosts)
  } catch (err) {
    res.status(500).json({ err })
  }
})

router.put('/socialPosts/:id', async ({ params: { id } }, res) => {
  try {
    const socialPosts = await socialPosts.put({})
    res.json(socialPosts)
  } catch (err) {
    res.status(500).json({ err })
  }
})

router.delete('/socialPosts/:id', async ({ params: { name } }, res) => {
  try {
    await Department.findOneAndDelete({ name: name.toLowerCase() })
    res.json({ message: 'Delete Successful!' })
  } catch (err) {
    res.status(500).json({ err })
  }
});

router.use((req, res) => {
  return res.send('Wrong route!')
})

module.exports = router