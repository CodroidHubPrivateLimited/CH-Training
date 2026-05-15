const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userData = require("../../allModels/model")

exports.userLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        console.log(req.body)
        console.log("Step1 : Request Hashed Password : ", password)


        const checkUser = await userData.findOne({email})
        console.log("step2 : user exist:", checkUser)

       if (!checkUser) { 
             return res.status(400).json({ message: "User doesn't exists" });
        }

        const passwordMatching= await bcrypt.compare(password, checkUser.password )
            console.log( password , "===", checkUser.password)
            console.log("Step3 : Password Comparision : ", passwordMatching)
        
        
            if (!passwordMatching) { 
               return res.status(400).json({ message: "Invalid Information" });
            }
  
        const token = jwt.sign( { id: checkUser._id },  process.env.JWT_SECRET,  { expiresIn: "1d" } );
        console.log(token);


       res.status(201).json({  message: "SignIn successful",   token,  checkUser  });



    }catch(error){
         console.log("Login error:", error);
    }
}