const express= require('express');
const mongoose= require('mongoose')

const app= express();

// Http Methods: It defines what action the client wants tp perfom on the server.
// Server mostcommony uses the following HTTP methods:
// 1. GET:>> To retrive the data from the server/DB 
// 2. POST: To Send data to Server/DB
// 3. PUT: To Update the Existing data on the server/db
// 4. DELETE: To Delete the existing data from the server/Db

// We say All these 4 Oprations as CRUD Operations: 
// C: Create
// R: Read
// U : Update 
// D: Delete


// 1. GET METHOD 
app.get("/firstApi",(req,res)=>{
    res.send("GET Method is called")
    console.log("GET Method is called")
})

// POSTMAN API Testing 
// Testing Tool>> jo ki humare api's ko test krne kai kaam ataa hai;





app.post("/first/post/api",(req, res)=>{
    res.send("Post Method is called ")
})

app.put("/first/put/api",(req, res)=>{
    res.send("PUT Method is called ")
})

app.delete("/first/delete/api",(req, res)=>{
    res.send("Delete Method is called ")
})






// Ab  HUM GET,  Post , update , delete method ko direct MongoDB sai connect krkai dekhte hain

// Mongo DB Connection 
// 1. mongoose dependency install
//2. MongoDB Localhost user krlenge

// Mongoose ko connect 
// >> mongoose.connect() method 
mongoose.connect("mongodb://localhost:27017/mernBatchTwoDB")
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((err)=>{
    console.log("MongoDB connection failed", err)
})




app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})


