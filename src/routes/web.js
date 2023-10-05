const express = require('express')
const { getHomepage, getABC } = require('../controllers/homeController')

const router = express.Router()

router.get('/', getHomepage)
router.get('/ABC', getABC)

module.exports = router;
