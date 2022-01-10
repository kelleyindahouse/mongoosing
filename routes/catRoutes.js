const router = require('express').Router()
const { Cat, Owner } = require('../models')

// GET all cats
router.get('/cats', async function (req, res) {
  const cats = await Cat.find({}).populate({
    path: 'owner',
    populate: {
      path: 'cats',
      model: 'cat'
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'dogs',
      model: 'dog',
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'birds',
      model: 'bird',
    }
  })
  res.json(cats)
})

// GET one cat by id
router.get('/cats/:id', async function (req, res) {
  const cat = await Cat.findById(req.params.id).populate({
    path: 'owner',
    populate: {
      path: 'cats',
      model: 'cat'
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'dogs',
      model: 'dog',
    }
  }).populate({
    path: 'owner',
    populate: {
      path: 'birds',
      model: 'bird',
    }
  })
  res.json(cat)
})

// POST one cat
router.post('/cats', async function (req, res) {
  const cat = await Cat.create(req.body)
  await Owner.findByIdAndUpdate(req.body.user, { $push: { cats: cat._id } })
  res.json(cat)
})

// PUT one cat by id
router.put('/cats/:id', async function (req, res) {
  await Cat.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one cat by id
router.delete('/cats/:id', async function (req, res) {
  await Cat.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router