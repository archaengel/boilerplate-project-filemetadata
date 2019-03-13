const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Helpers = require("./Helpers")
const getModel = Helpers.GetModel

const metadataSchema = new Schema({
  filename: {
    required: true,
    type: String,
  }
})

module.exports = getModel("Metadata", metadataSchema)
