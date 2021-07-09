
const router = require('express').Router();
const { validateUser,validateAddSubscription,validateGetSubscription } =require('./../../lib/Validations/validation');
const { getSubscriptionHandler, addSubscriptionHandler, getUserHandler, addUserHandler } = require('./subscriptionHandler');
const { addPlans } = require('../../seed/plans');
 router.put('/user/:username', validateUser, addUserHandler )
 router.get('/user/:username', validateUser, getUserHandler )
 router.post('/subscription', validateAddSubscription, addSubscriptionHandler )
 router.get('/subscription/:username/:date?', validateGetSubscription, getSubscriptionHandler )
 router.get('/seed/plans', addPlans)


module.exports = router