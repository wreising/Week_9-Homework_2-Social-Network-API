// Creates a new document
app.post('/genres', async ({ body }, res) => {
  try {
    const genre = await Genre.create(body)
    res.json(genre)
  } catch (err) {
    res.status(500).json({ err })
  }
  //
  // const newGenre = new Genre({ name: req.params.genre })
  // newGenre.save()
  // if (newGenre) {
  //   res.status(200).json(newGenre)
  // } else {
  //   console.log('Uh Oh, something went wrong')
  //   res.status(500).json({ message: 'something went wrong' })
  // }
  //
})

// Finds all documents
app.get('/genres', async (req, res) => {
  try {
    const genres = await Genre.find({})
    res.json(genres)
  } catch (err) {
    res.status(500).json({ err })
  }
  // Using model in route to find all documents that are instances of that model
  //
  // Genre.find({}, (err, result) => {
  //   if (result) {
  //     res.status(200).json(result)
  //   } else {
  //     console.log('Uh Oh, something went wrong')
  //     res.status(500).json({ message: 'something went wrong' })
  //   }
  // })
  //
})

// Find document with ID
app.get('/genres/:id', async ({ params: { name } }, res) => {
  try {
    const genre = await Genre.findOne({  })
    res.json(genre)
  } catch (err) {
    res.status(500).json({ err })
  }
  //
  // Genre.findOne({ name: 'Kids' }, (err, result) => {
  //   if (result) {
  //     res.status(200).json(result)
  //   } else {
  //     console.log('Uh Oh, something went wrong')
  //     res.status(500).json({ message: 'something went wrong' })
  //   }
  // })
  //
})

// Find first document with name equal to "Kids"
app.get('/genres/:name', async ({ params: { name } }, res) => {
  try {
    const genre = await Genre.findOne({ name })
    res.json(genre)
  } catch (err) {
    res.status(500).json({ err })
  }
  //
  // Genre.findOne({ name: 'Kids' }, (err, result) => {
  //   if (result) {
  //     res.status(200).json(result)
  //   } else {
  //     console.log('Uh Oh, something went wrong')
  //     res.status(500).json({ message: 'something went wrong' })
  //   }
  // })
  //
})

// Finds first document that matches and deletes
app.delete('/genres/:id', async ({ params: { id } }, res) => {
  try {
    await Genre.findByIdAndDelete(id)
    res.json({ message: 'Genre successfully deleted!' })
  } catch (err) {
    res.status(500).json({ err })
  }
  //
  // Genre.findOneAndDelete({ name: req.params.genre }, (err, result) => {
  //   if (result) {
  //     res.status(200).json(result)
  //     console.log(`Deleted: ${result}`)
  //   } else {
  //     console.log('Uh Oh, something went wrong')
  //     res.status(500).json({ message: 'something went wrong' })
  //   }
  // })
  //
})

// Finds the first document with the name with the value equal to 'Kids' and updates that name to the provided URL param value
app.put('/genres/:id', async ({ params: { id }, body }, res) => {
  try {
    await Genre.findByIdAndUpdate(id, body)
    res.json({ message: 'Genre successfully updated!' })
  } catch (err) {
    res.status(500).json({ err })
  }
  //
  // // Uses findOneAndUpdate() method on model
  // Genre.findOneAndUpdate(
  //   // Finds first document with name of "Kids"
  //   { name: 'Kids' },
  //   // Replaces name with value in URL param
  //   { name: req.params.genre },
  //   // Sets to true so updated document is returned Otherwise original document will be returned
  //   { new: true },
  //   (err, result) => {
  //     if (result) {
  //       res.status(200).json(result)
  //       console.log(`Updated: ${result}`)
  //     } else {
  //       console.log('Uh Oh, something went wrong')
  //       res.status(500).json({ message: 'something went wrong' })
  //     }
  //   }
  // )
  //
})