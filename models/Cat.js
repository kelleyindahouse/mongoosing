const { Schema, model } = require('mongoose')

const CatSchema = new Schema({
  name: {
    type: String,
    required: true 
  },
  age: { 
    type: Number,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  living: {
    type: Boolean,
    required: true
  }
})

module.exports = model('cat', CatSchema)