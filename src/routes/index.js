const express = require('express')
const router = express.Router()

router.get('/', async (req, res)=> {
    res.render('pages/index') //render já vai direto na pasta views
})

module.exports = router