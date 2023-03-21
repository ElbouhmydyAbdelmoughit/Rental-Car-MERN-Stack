const  mongoose = require('mongoose')

const carSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please Enter Name"]
  },
  model:{
    type:String,
    required:[true,"Please Enter Model"]
  },
  description:{
    type:String,
    required:[true,"Please Enter Description"]
  },
  image:{
    type:String,
  },
})

module.exports = mongoose.model('Car',carSchema)