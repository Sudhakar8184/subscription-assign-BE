const {  addUser, getUser, addSubscription,getSubscription } = require("../../app/controllers/subscription")


const addUserHandler = async (req,res) =>{
    try {
        const data = await addUser(req.params)
        res.status(200).send(data)     
    } catch (error) {
        res.status(400).send({
            success: false,
            error,
            message : error.message,
        }) 
    }
  
}

const getUserHandler = async (req,res) =>{
    try {
        const data = await getUser(req.params)
        res.status(200).send(data)     
    } catch (error) {
        res.status(400).send({
            success: false,
            error,
            message : error.message,
        }) 
    }
  
}


const addSubscriptionHandler = async (req,res) =>{
    try {
        const data = await addSubscription(req.body)
        res.status(200).send(data)     
    } catch (error) {
        res.status(400).send({
            success: false,
            error,
            message : error.message,
        }) 
    }
}

const getSubscriptionHandler = async (req,res) =>{
    try {
        const data = await getSubscription(req.params)
        res.status(200).send(data)     
    } catch (error) {
        res.status(400).send({
            success: false,
            error,
            message : error.message,
        }) 
    }
}

module.exports ={
    addUserHandler,
    getUserHandler,
    addSubscriptionHandler,
    getSubscriptionHandler
}