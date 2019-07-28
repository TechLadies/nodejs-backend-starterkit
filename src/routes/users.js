const express = require('express')
const router = express.Router()
const debug = require('debug')('app:users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  debug('Hello World!')
  res.send('respond with a resource now!')
})

module.exports = router
