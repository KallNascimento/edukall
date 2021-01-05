const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const schoolClassSchema = new Schema({
  name : String,
  module: String,
  course: [{type: mongoose.Schema.Types.ObjectId,ref:'Courses'}],
  days: String,
  status:Boolean,
  notes:String
}, {versionKey: false})
module.exports = mongoose.model('SchoolClass', schoolClassSchema)
