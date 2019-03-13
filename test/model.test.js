const chai = require("chai")
const expect = chai.expect

const Metadata = require("../models/Metadata")()

describe("metadata", function() {
  describe("filename", function() {
    it(`is required`, function (done) {
      let metadataWithoutFilename = new Metadata({notfilename: "something"});

      metadataWithoutFilename.validate(function(err) {
        expect(err.errors.filename).to.exist
        done()
      })
    })

    it(`should be a string`, function(done) {
      let metadataWithNonStringFilename = new Metadata({filename: [2,3]});

      expect(metadataWithNonStringFilename.toObject().filename).to.be.a("String")
      done()
    })
  })
})
