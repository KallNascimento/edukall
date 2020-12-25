const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const schoolClassSchema = new Schema({
  name : String,
  module: String,
  status:Boolean,
  notes:[]
}, {versionKey: false})
module.exports = mongoose.model('SchoolClass', schoolClassSchema)
