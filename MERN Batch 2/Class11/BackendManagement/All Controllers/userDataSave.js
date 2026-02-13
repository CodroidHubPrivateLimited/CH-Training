const express = require("express")
const UserSchema= require("../All Models/user")


exports.SaveDataController = async (req,res)=>{

try{
    const data= await UserSchema.create(req.body)
    console.log(data);
    res.json(data)

}catch{
(err)=>{
    console.log(err)
}
}
}