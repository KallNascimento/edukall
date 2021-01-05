const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  cti: Number,
  schoolClass:[{type: mongoose.Schema.Types.ObjectId,ref:'schoolClasses'}],
  name: String,
  grades:Number,
  status : Boolean,
  notes : String
},{versionKey: false})

module.exports = mongoose.model('Student',studentSchema)
