const mongoose = require("mongoose")
const chai = require("chai")
const expect = chai.expect

const Metadata = require("../models/Metadata")()

describe("metadata", function() {
  describe("name", function() {
    it(`is required`, function (done) {
      let docWithNoName = new Metadata({notname: "something"});

      docWithNoName.validate(function(err) {
        expect(err.errors.name).to.exist
        done()
      })
    })

    it(`should be a string`, function(done) {
      let docWithNotStringName = new Metadata({name: 3});

      expect(docWithNotStringName.toObject().name).to.be.a("String")
      done()
    })
  })

  describe("type", () => {
    it(`should be a string`, (done) => {
      let docWithNonStringType = new Metadata({type: [3,4]})

      expect(docWithNonStringType.toObject().type).to.be.a("String")
      done()
    })
  })

  after((done) => {
    mongoose.deleteModel("Metadata")
    done()
  })
})
