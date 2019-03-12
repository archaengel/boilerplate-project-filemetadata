const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Helpers = require("./Helpers")
const getModel = Helpers.GetModel

const metadataSchema = new Schema({
  filename: {
    type: String,
    required: true,
  }
})

module.exports = getModel("Metadata", metadataSchema)
