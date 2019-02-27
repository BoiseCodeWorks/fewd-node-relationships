let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Student"

let schema = new Schema({
  name: {type: String, required: true},
  school: {type: ObjectId, ref: "School", required: true},
  favoriteSubject: {type: String, enum: ["Art", "Math", "History", "Computer Science"]}
})

module.exports = mongoose.model(name, schema)