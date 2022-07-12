const express = require('express')
const router = express.Router()

router.get('/api', (request, response) => {
    response.status(200).send({
        success: 'true',
        message: 'API running',
        version: '1.0.0'

    })
})

module.exports = router