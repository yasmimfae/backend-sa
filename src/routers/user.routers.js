const router = require('express-promise-router')()
const userController = require('../controllers/user.controller')

router.get('/users', userController.findAll)
router.get('/users/:id', userController.findById)
router.post('/users', userController.create)
// router.post('/users/username', userController.username)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

module.exports = router