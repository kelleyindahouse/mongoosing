const { Schema, model } = require('mongoose')

const Dog = new Schema({
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
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'owner',
    required: true
  }
})

module.exports = model('dog', Dog)