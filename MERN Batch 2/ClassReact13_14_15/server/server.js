const express = require("express")
const mongoose =  require("mongoose")
const cors=require('cors')
const DushalSaveingRoute = require("./BackendManagement/All Routes/route")
const LoginRoute = require("./BackendManagement/All Routes/loginRoute")


const app = express()


app.use(cors())
app.use(express.json())



mongoose.connect("mongodb://localhost:27017/Databas")
.then(()=>{
    console.log("Your Database is connected")
}).catch((err)=>{
    console.log(err)
})






app.use("/api", DushalSaveingRoute)
app.use("/api", LoginRoute)



app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})



// BASICS >> We Have seen >>
// >> How to perform CRUD operations >> function async >> try cathch // Error Handling

// 1. Authentication and Authorization
// >> Authentication ?? >> Who are you ?? >> Identity Verification >> Ex: Ration Shop

// >> Authorization ??>> What are you allowed to do>> Ex: Office 


// Login System >> Email or jo Password hota hai usko hum kyu use krte hai ?>> Authentacion Perform Ho rahi hain
// Event Management System>> 2 -3 users hain >> Dashboard mai sabko alg alg cheze dikh rahi hain >> Authorization perform hori hai >> Kyu ki hume limited acces hai or Role based mai Access Diya gaya hai



// bcrypt>> jwt (json web token) ; middleware (protected routes)


// jwt>> 


// bcrypt >> is used to hash the password
// Hash Password >> "1hhvhjfdhvdshfvhavsf#$%^&dsbfjkasbfkbasf........"
// >> password: 1234 >> Hashihng (hashfunction) >> "1hhvhjfdhvdshfvhavsf#$%^&dsbfjkasbfkbasf........">>
// >> password: 1234 >> Hack kr sakta hai
// >>Password: 1hhvhjfdhvdshfvhavsf#$%^&dsbfjkasbfkbasf........ >> Can notr be hacked Easily 


// bcrpyt what actully does 
// 1234 -------> hash -------> 1hhvhjfdhvdshfvhavsf#$%^&dsbfjkasbfkbasf
// >> one way encryption 
// >> Cannot be converted back
// >>Extremely Secure
// >> Saltting use krta hai >> Automatically . 



// JWT >> (JSON WEB TOKEN)    >> Token: "1hhvhjfdhvdshfvhavsf#$%^&dsbfjkasbfkbasf"
// >> it is used for authentication after login
// >>Ye humare user kai sessions ko store krne kai kaam ata hai naa ki humara Password store nahi krta 
 



// Real Company Flow (Very Important) 

// Signup 

// User → Signup → Password hashed → Stored in DB 
 

// Login 

// User → Login → Password compare → JWT generated 
 

// After Login 

// Frontend stores JWT 
// Every API call sends token in headers 
 

// headers: { 
//  Authorization: token 
// } 
 

// Protected Route 

// Token verified → user allowed 
// Invalid token → 401 Unauthorized 
 

 