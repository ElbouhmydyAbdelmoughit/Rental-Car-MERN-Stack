const mongosse = require('mongoose')

const commandSchema = mongosse.Schema({
  user_id:{
    type:mongosse.Schema.Types.ObjectId,
    ref:"User"
  },
  car_id:{
    type:mongosse.Schema.Types.ObjectId,
    ref:"Car"
  }
})

const Command = mongosse.model('Command',commandSchema)
module.exports = Command