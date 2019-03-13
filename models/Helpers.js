const mongoose = require("mongoose")

function getModel(modelName, modelSchema) {
  return function() {
    return mongoose.modelNames().indexOf(modelName) === -1
    ? new mongoose.model(modelName, modelSchema)
    : mongoose.connection.model(modelName)
  }
}

module.exports.GetModel = getModel
