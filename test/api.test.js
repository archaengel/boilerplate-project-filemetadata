const chai = require("chai")
const expect = chai.expect
const sinon = require("sinon")

const {
  fileAnalyseHandler
} = require("../controllers/analyser")

describe("api", () => {
  describe("fileAnalyserHandler()", () => {
    const file = {
      originalname: "filename",
      mimetype: "filetype",
      size: "filesize"
    }

    it(`should return file's name`, (done) => {
      res = fileAnalyseHandler({file})({})(sinon.stub(next))
      console.log(res)
      expect(res.name).to.equal(file.originalname)
    })
  })
})

