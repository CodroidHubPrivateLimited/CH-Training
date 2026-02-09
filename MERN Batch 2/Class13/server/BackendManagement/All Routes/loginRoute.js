const express = require("express")
const {UserLogin} = require("../All Controllers/User Login/userLogin")
const {authMiddleware}= require("./All Protected Route/protectedRoutes")
const router= express.Router()

router.post('/first/login/call', UserLogin, authMiddleware,(req,res)=>{
 res.json({ 
   message: "Welcome to Login", 
   userId: req.user.id 
 }); 
});




module.exports = router;
