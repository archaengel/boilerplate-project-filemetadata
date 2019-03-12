const router = require('express').Router()

router.get('/hello', (req, res, next) => {
  res.send("<h1>HELLO</h1>")
})

module.exports = router
