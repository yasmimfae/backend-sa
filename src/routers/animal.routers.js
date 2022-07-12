const router = require('express-promise-router')()
const animalController = require('../controllers/animal.controller')

router.get('/animal', animalController.findAll)
router.get('/animal/:id', animalController.findById)
router.post('/animal', animalController.create)
router.put('/animal/:id', animalController.update)
router.delete('/animal/:id', animalController.delete)

module.exports = router