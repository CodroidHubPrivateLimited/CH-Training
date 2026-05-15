const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userData = require("../../allModels/model")

exports.userRegister = async(req, res)=>{
    try{
         const {name,email,password} = req.body;
        console.log("Step 1 : password", password)
        
        const checkUser = await userData.findOne({email})
        console.log("step 2: user exist", checkUser)

        if (checkUser){
            return res.status(401).json({message: "user already exists"})
        }

         
        const hashPassword= await bcrypt.hash(password,10)
        console.log("Step3 : hashed Password is : ", hashPassword)

        const usersData=await userData.create({name,email,password: hashPassword})
        console.log("Step4: save data in DB: ", usersData)
    

       res.status(201).json({  message: "Registration successful", usersData });

    }catch(error){
           console.log(error)
    }
}