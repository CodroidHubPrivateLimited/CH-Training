const express = require("express")
const UserSchema= require("../All Models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.RegisteringUser = async (req,res)=>{ 

try{

    // const 






}catch(err){
    res.json({err: err.message});
}



}