let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'School'


let schema = new Schema({
  name: {type: String, required: true},
  principal: {type: ObjectId, ref: "Principal"},
  colors: [{type: String}]
})

module.exports = mongoose.model(name, schema)