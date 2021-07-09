const mongoose = require('mongoose')
let Schema = mongoose.Schema
var plansSchema = new Schema({
    planId:{
        type:String,
        trim:true,
        required:true,
        unique: true
    },
    validity:{
        type: String,
        trim:true,
        default:''
    },
    cost: {
        type: Number,
        trim:true,
        default:''
    }
})

module.exports = mongoose.model('Plans',plansSchema)