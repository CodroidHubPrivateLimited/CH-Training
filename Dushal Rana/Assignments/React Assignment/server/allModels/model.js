const mongoose = require("mongoose")

const userRegistrationData = new mongoose.Schema ({
    name: {type:String},
    email: {type:String},
    password: {type:String},
    confirmPassword: {type:String}
})
module.exports = mongoose.model("userdata", userRegistrationData)