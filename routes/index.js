const router = require('express').Router()

router.use('/api', require('./dogRoutes.js'))
router.use('/api', require('./catRoutes.js'))
router.use('/api', require('./birdRoutes.js'))

module.exports = router