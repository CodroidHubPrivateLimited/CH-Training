const express = require("express")
const UserSchema= require("../../All Models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// import .env

exports.UserLogin = async (req,res)=>{ 

try{
    const {email,password}= req.body; //========> {email,password}
    console.log(req.body)
    console.log("Step1 : Request Body Hashed Password : ", password)


        const checkUserExists= await UserSchema.findOne({email})
    console.log("Step2 : User Existes : ", checkUserExists)

       if (!checkUserExists) { 
     return res.status(400).json({ message: "User doesnot exists" });
       }

       const passwordMatching= await bcrypt.compare(password, checkUserExists.password )
            console.log( password , "===", checkUserExists.password)
    console.log("Step3 : Password Comparision : ", passwordMatching)
          if (!passwordMatching) { 
     return res.status(400).json({ message: "Invalid credentials" });
          }
  
   const token = jwt.sign(  { id: checkUserExists._id }, "DushalAndUday" );
   console.log(token)



    

       res.status(201).json({  message: "SignIn successful",   token,  checkUserExists  });
}catch(err){
    res.json({err: err.message});
}



}

