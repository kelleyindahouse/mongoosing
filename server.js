require('mongoose').connect('mongodb://localhost:27017/animals_db')

const { Schema, model } = require('mongoose')

const DogSchema = new Schema({
  name: String,
  age: Number,
  breed: String
})

const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
  living: Boolean
})

const BirdSchema = new Schema ({
  name: String,
  age: Number,
  breed: String,
  living: Boolean,
  canFly: Boolean
})

const Dog = model('dog', DogSchema)

const Cat = model('cat', CatSchema)

const Bird = model('bird', BirdSchema)

Dog.create({
  name: 'Beef',
  age: 2,
  breed: 'Chihuahua'
})
  .then(dog => console.log(dog))
  .catch(err => console.log(err))

Cat.create({
  name: 'Cheese',
  age: 3,
  breed: 'Toiger',
  living: true
})
  .then(cat => console.log(cat))
  .catch(err => console.log(err))

Bird.create({
  name: 'Pengy',
  age: 5,
  breed: 'Penguin',
  living: false,
  canFly: false
})
  .then(bird => console.log(bird))
  .catch(err => console.log(err))
