const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name:String,
  durationTime: Number,
  //courseDays:String,
},{versionKey: false})

module.exports = mongoose.model('Course', courseSchema)
