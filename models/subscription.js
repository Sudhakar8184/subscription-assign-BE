const mongoose = require('mongoose')
let Schema = mongoose.Schema
var subscriptionsSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required:true
    },
    planId:{
        type: Schema.Types.ObjectId,
        ref: 'Plans',
        required:true
    },
    startDate:{
        type: Date,
        default: null
    }
})

module.exports = mongoose.model('Subscriptions', subscriptionsSchema)