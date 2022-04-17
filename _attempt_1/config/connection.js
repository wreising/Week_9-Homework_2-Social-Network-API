// socialPosts

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection




// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialMediaDB' - process.env.MONGODB_URI - is it needed?