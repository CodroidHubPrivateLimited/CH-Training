const express = require("express")
const UserSchema= require("../../All Models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.RegisteringUser = async (req,res)=>{ 

try{
    const {email,password,name,ph}= req.body; //========> {email,password}
    console.log("Step1 : Request Body Password : ", password)


        const checkUserExists= await UserSchema.findOne({email})
    console.log("Step2 : User Existes : ", checkUserExists)

       if (checkUserExists) { 
     return res.status(400).json({ message: "User already exists" });
       }

    const hashPassword= await bcrypt.hash(password,10)
    console.log("Step3 : Hasing the Password >> hashed Password is : ", hashPassword)



    const userRegisterData=await UserSchema.create({name,ph,email,password: hashPassword})
    console.log("Step4: Saving data to DB and the data was: ", userRegisterData)

    

       res.status(201).json({  message: "Signup successful", userRegisterData });
}catch(err){
    res.json({err: err.message});
}



}

