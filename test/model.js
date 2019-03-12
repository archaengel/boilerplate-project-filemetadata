const chai = require("chai")
const assert = chai.assert

const Metadata = require("../models/Metadata")

suite("metadata", function() {
  test(`should be invalid if name is empty`, function () {
    let metadataBeingTested = new Metadata();

    metadataBeingTested.validate(function(err) {
      assert.isNotNull(err, "error is present!")
    })
  })
})
