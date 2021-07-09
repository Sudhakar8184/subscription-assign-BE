const mongoose = require('mongoose')
const { string } = require('joi')
let Schema = mongoose.Schema
var userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        default:'',
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users',userSchema)