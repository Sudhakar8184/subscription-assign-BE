const Joi = require('joi')
 const validateUser = async (req, res, next) => {
    try{
        const data = req.params
        const schema = {
            username: Joi.string().min(2).required(),
        }
      const {error} = await Joi.object().keys(schema).validate(data)
      validationResponse(res, next, error)
    } catch(error) {
        res.status(422).json({
            error
        })
    }
}

const validateAddSubscription = async (req, res, next) => {
    try{
        const data = req.body
        const schema = {
            user_name: Joi.string().min(2).required(),
            plan_id: Joi.string().required(),
            start_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/).required(),
        }
      const {error} = await Joi.object().keys(schema).validate(data)
      validationResponse(res, next, error)
    } catch(error) {
        res.status(422).json({
            error
        })
    }
}

const validateGetSubscription = async (req, res, next) => {
    try{
        const data = req.params
        const schema = {
           username: Joi.string().min(2).required(),
           date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/),
        }
        const {error} = await Joi.object().keys(schema).validate(data)
        validationResponse(res, next, error)
    } catch(error) {
        res.status(422).json({
            error
        })
    }
}

function validationResponse (res, next, error) {
    if (!error) {
        next()
    } else {
        res.status(422).json({
            error
        })
    }
}



module.exports = { validateUser, validateAddSubscription, validateGetSubscription }
