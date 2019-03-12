const chai = require("chai")
const assert = chai.assert

const Metadata = require("../models/Metadata")()

suite("metadata", function() {
  suite("filename", function() {
    test(`should be invalid if name is empty`, function () {
      let metadataBeingTested = new Metadata({notfilename: "something"});

      metadataBeingTested.validate(function(err) {
        assert.isNotNull(err, "'filename' is required")
      })
    })

    test("should be a string", function() {
      let metadataBeingTested = new Metadata({filename: [2,3]});

      metadataBeingTested.validate(function(err) {
        assert.isNotNull(err, "'filename' should be a string")
      })
    })
  })
})
