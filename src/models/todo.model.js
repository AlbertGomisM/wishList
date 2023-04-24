
const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  topic: {
    type: String,
    required: [true, 'The topic filed is requerid']
  },
  details: {
    type: String,
    required: [true, 'The details filed is requerid']
  }

})

const TodoModel = model('Todo', TodoSchema)

module.exports = TodoModel