const chai = require("chai")
const expect = chai.expect
const Maybe = require("folktale/maybe")
const { Just, Nothing } = Maybe

const {
  howFly,
  startServerIfCommandline
} = require("../server.js")

describe("server.js", () => {
  describe("howFly when called", () => {
    it("should return how fly", () => {
      expect(howFly()).to.equal("soo fly")
    })
  })

  describe("startServerIfCommandline when called", () => {
    const mainStub = {}
    const appStub = { listen: () => "net.Server" }
    it("should return a net.Server if commandline", () => {
      const result = startServerIfCommandline(mainStub)(mainStub)(appStub)(3000)
        .getOrElse("cowface")
      expect(result).to.equal("net.Server")
    })

    it("should return nothing if required", () => {
      const result = startServerIfCommandline(mainStub)({})(appStub)(3000)
      expect(result).to.not.equal("net.Server")
    })
  })
})

