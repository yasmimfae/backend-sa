const router = require('express-promise-router')()
const denunciasController = require('../controllers/denuncia.controller')

router.get('/denuncias', denunciasController.findAll)
router.get('/denuncias/:id', denunciasController.findById)
router.post('/denuncias', denunciasController.create)
// router.post('/denuncias/nome', denunciasController.nome)
router.put('/denuncias/:id', denunciasController.update)
router.delete('/denuncias/:id', denunciasController.delete)

module.exports = router