const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  cti: Number,
  course:[{type: mongoose.Schema.Types.ObjectId,ref:'Courses'}],
  name: String,
  grade:[],
  status : Boolean,
  notes : []
},{versionKey: false})

module.exports = mongoose.model('Student',studentSchema)
