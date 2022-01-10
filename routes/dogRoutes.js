const router = require('express').Router()
const { Dog, Owner } = require('../models')

// GET all dogs
router.get('/dogs', async function (req, res) {
  const dogs = await Dog.find({}).populate({
    path: 'owner',
    populate: {
      path: 'dogs',
      model: 'dog'
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'cats',
      model: 'cat',
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'birds',
      model: 'bird',
    }
  })
  res.json(dogs)
})

// GET one dog by id
router.get('/dogs/:id', async function (req, res) {
  const dog = await Dog.findById(req.params.id).populate({
    path: 'owner',
    populate: {
      path: 'dogs',
      model: 'dog'
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'cats',
      model: 'cat',
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'birds',
      model: 'bird',
    }
  })
  res.json(dog)
})

// POST one dog
router.post('/dogs', async function (req, res) {
  const dog = await Dog.create(req.body)
  await Owner.findByIdAndUpdate(req.body.user, { $push: { dogs: dog._id } })
  res.json(dog)
})

// PUT one dog by id
router.put('/dogs/:id', async function (req, res) {
  await Dog.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one dog by id
router.delete('/dogs/:id', async function (req, res) {
  await Dog.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router