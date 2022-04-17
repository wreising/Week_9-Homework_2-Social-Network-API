// socialPosts

const { Schema, model } = require('mongoose');
// const postSchema = require('./Reaction');
// const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postName: {
      type: String,
      required: true,
    },
    postBody: {
      type: String,
      minlength: 1,
      maxlength: 2500
    },
    keywords: {
      type: String,
      required: false
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // },
    // reactions: [reactionSchema]
  },
  // {
  //   toJSON: {
  //     getters: true
  //   },
  //   id: false
  // }
);

// thoughtSchema.virtual('reactionCount').get(function () {
//   return this.reactions.length;
// });

const Post = model('Post', postSchema);

module.exports = Post;














// const { Schema, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const postSchema = new Schema(
//   {
//     // reactionId: {
//     //   type: Schema.Types.ObjectId,
//     //   default: () => new Types.ObjectId()
//     // },
//     postName: {
//       type: String,
//       required: true,
//       maxlength: 280
//     },
//     postBody: {
//       type: String,
//       required: true,
//       maxlength: 2800
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: timestamp => dateFormat(timestamp)
//     }
//   },
//   {
//     toJSON: {
//       getters: true
//     },
//     id: false
//   }
// );

// module.exports = reactionSchema;


// const { Schema, mongoose } = require('mongoose')

// // const postSchema = new mongoose.Schema({
// //   post_name: { type: String, required: true },
// //   lastAccessed: { type: Date, default: Date.now },
// // })

// const socialPosts = mongoose.model('socialPost',)

// const handleError = (err) => console.error(err)

// const postSchema = new Schema(
//   {
//     post_name: { type: String, required: true },
//     post_body: { type: String, required: true },
//     lastAccessed: { type: Date, default: Date.now },
//   }
// )

// // Will add data only if collection is empty to prevent duplicates
// // More than one document can have the same name value
// // socialPosts.find({}).exec((err, collection) => {
// //   if (collection.length === 0) {
// //     socialPosts.insertMany(
// //       [
// //         { name: 'post_name' },
// //         { name: 'post_body' },
// //       ],
// //       (insertErr) => {
// //         if (insertErr) {
// //           handleError(insertErr)
// //         }
// //       }
// //     )
// //   }
// // })

// module.exports = socialPosts
