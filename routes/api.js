const router = require('express').Router()
const {
  fileAnalyseHandler
} = require("../controllers/analyser")

router.post('/fileanalyse', fileAnalyseHandler)

module.exports = router
