const mongoose = require("mongoose");
const Plan = mongoose.model("Plans");
const plans = require('./plan.json')
const addPlans = async (req, res) => {
  try {
    await Promise.all(plans.map( async (payload)=>{
        let plan = new Plan(payload);
        await plan.save();
    }))
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, error });
  }
};

module.exports = {
    addPlans
};
