const router = require('express').Router()
const { Bird } = require('../models')

// GET all birds
router.get('/birds', async function (req, res) {
  const birds = await Bird.find({})
  res.join(birds)
})

// GET one bird by id
router.get('/birds/:id', async function (req, res) {
  const bird = await Birds.findById(req.params.id)
  res.json(bird)
})

// POST one bird
router.post('/birds', async function (req, res) {
  const bird = await Bird.create(req.body)
  res.json(bird)
})

// PUT one bird by id
router.put('/birds/:id', async function (req, res) {
  await Bird.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one bird by id
router.delete('/birds/:id', async function (req, res) {
  await Bird.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router