const mongoose = require("mongoose");
const User = mongoose.model("Users");
const Subscription = mongoose.model("Subscriptions");
const Plan = mongoose.model("Plans");
const moment = require("moment");
const addUser = async (data) => {
  try {
    let payload = {
      username: data.username.trim(),
    };
    let user = new User(payload);
    user = await user.save();
    return { success: true };
  } catch (error) {
     throw error;
  }
};
const getUser = async (data) => {
  try {
    const user = await User.findOne(
      { username: data.username }
    );
    return { success: true, user };
  } catch (error) {
    throw error;
  }
};
const addSubscription = async (data) => {
  try {
    const user = await User.findOne(
        { username: data.user_name }
      );
      if(!user){
        throw new Error('username not found')
    }
      const plan = await Plan.findOne(
        { planId: data.plan_id }
      );
      if(!plan){
          throw new Error('planId not found')
      }
      let payload={
          userId : user._id,
          planId: plan._id,
          startDate: moment(data.start_date).startOf('day')
      }
    let subscription = new Subscription(payload);
    subscription = await subscription.save();
    return { status: 'Success', amount: '-' + plan.cost };
  } catch (error) {
    throw error;
  }
};
const getSubscription = async (data) => {
  try {
    const user = await User.findOne(
        { username: data.username }
      );
      if(!user){
        throw new Error('username not found')
    }
    let subscription = await Subscription.find({userId: user._id}).populate('planId').populate('userId')
    let response  =[]
    if(data.date){
        subscription.map((sub)=>{
            let subdate= moment(sub.startDate, 'YYYY-MM-DD')
            let toDate= moment(data.date, 'YYYY-MM-DD')
            let value = toDate.diff(subdate, 'days')
            response.push({
                plan_id: sub.planId.planId,
                days_left: value
            })
        })
 
    } else {
        subscription.map((sub)=>{
            let Infinte
            let vaildTill
            if(sub.planId.planId === 'FREE'){
                Infinte = 'No Limit Date'
            } else{
                 vaildTill= moment(sub.startDate).add(Number(sub.planId.validity), 'days')
            }
            response.push({
                plan_id: sub.planId.planId,
                start_date: moment(sub.startDate).format('YYYY-MM-DD'),
                vaild_till: Infinte ? Infinte :  moment(vaildTill).format('YYYY-MM-DD')
            })
        })
    }
    return { success: true, response };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUser,
  getUser,
  addSubscription,
  getSubscription,
};
