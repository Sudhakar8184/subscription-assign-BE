require('dotenv').config({silent:true})
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('./configs/index')
require('./routes/index')(app)
const port  = process.env.PORT || 3001

app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("started", port)
})