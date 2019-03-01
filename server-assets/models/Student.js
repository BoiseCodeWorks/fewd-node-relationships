let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Student"

//grade schema will be a subDoc on the Student schema
//mongodb will provide _id's for each grade 
let grade = new Schema({
  score: {type: String, enum: ["A", "B", "C", "D", "F"], required},
  assignment: {type: String, required}
})

let schema = new Schema({
  name: {type: String, required: true},
  school: {type: ObjectId, ref: "School", required: true},
  favoriteSubject: {type: String, enum: ["Art", "Math", "History", "Computer Science"]},
  classrooms: [{type: ObjectId, ref: "Classroom"}],
  grades: [grade] //every element in the grades array must be a grade
})

module.exports = mongoose.model(name, schema)