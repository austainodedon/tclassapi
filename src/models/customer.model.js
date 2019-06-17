let mongoose = require('mongoose')

const server = 'ds339177.mlab.com:39177'
const database = 'naijaexams'
const user = 'naijaexamsuser'
const password = 'naijaexamspassword'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
