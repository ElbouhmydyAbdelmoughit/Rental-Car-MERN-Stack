const  mongoose = require('mongoose')

const carSchema = mongoose.Schema({
  name:{
    type:String,
  },
  model:{
    type:String,
  },
  description:{
    type:String,
  },
  image:{
    type:String,
  },
})

module.exports = mongoose.model('Car',carSchema)