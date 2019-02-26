let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Principal'


let schema = new Schema({
  name: {type: String, required: true},
  school: {type: ObjectId, ref: "School"},
  age: {type: Number}
})

module.exports = mongoose.model(name, schema)