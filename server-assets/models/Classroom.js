let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Classroom"

let schema = new Schema({
  roomNumber: {type: String, required: true},
  building: {type: String, required: true},
  students: [{type: ObjectId, ref: "Student"}]
})

module.exports = mongoose.model(name, schema)