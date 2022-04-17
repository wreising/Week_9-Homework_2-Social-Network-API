const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  postName: { type: String, required: true },
  postBody: { type: String, required: true, length: [1, 2000] },
  dateCreated: { type: Date, default: Date.now },
})

const Post = mongoose.model('Post', postSchema)

const handleError = (err) => console.error(err)

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
// Genre.find({}).exec((err, collection) => {
//   if (collection.length === 0) {
//     Genre.insertMany(
//       [
//         { name: 'Kids' },
//         { name: 'Kids' },
//         { name: 'Kids' },
//         { name: 'Romance' },
//         { name: 'Mystery' },
//         { name: 'Contemporary' },
//         { name: 'Biography' },
//       ],
//       (insertErr) => {
//         if (insertErr) {
//           handleError(insertErr);
//         }
//       }
//     );
//   }
// });

module.exports = Post
