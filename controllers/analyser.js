const fileAnalyseHandler = (req) =>
  (res) =>
  (next) =>
  res.json({
    name: req.file.originalname,
  })

module.exports = {
  fileAnalyseHandler
}
