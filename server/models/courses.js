const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name:String,
  durationTime: Number
},{versionKey: false})

module.exports = mongoose.model('Courses', courseSchema)
