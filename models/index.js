const fs = require('fs')
const modelNames = fs.readdirSync(__dirname)
modelNames.map((name)=>{
    console.log(name)
require('./'+name)
})