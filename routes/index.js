require('./../models/index')
module.exports = (app) =>{
app.get('/', (req,res)=>{
    res.send('successfully connecteed')
})
app.use(require('./v1'))
}
