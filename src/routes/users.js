const express = require('express')
const router = express.Router()
const debug = require('debug')('app:users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  debug('Hello World!')

  const users = [
    { name: 'Elisha', gender: 'FEMALE' },
    { name: 'Michael', gender: 'MALE' }
  ]

  res.json(users)
})

module.exports = router
