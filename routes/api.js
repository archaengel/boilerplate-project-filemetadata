const router = require('express').Router()
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.post('/fileanalyse', upload.single("upfile"), function(req, res){
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  })
})

module.exports = router
