const express=require("express");
const mongoose = require("mongoose");
const app=express();





// Task 1
app.get("/api/test/get",(req,res)=>{
    res.send("Get API working successfully");
    console.log("Get API called");
});

// Task 2
app.post("/api/test/post",(req,res)=>{
    res.send("Post API working successfully");
    console.log("Post API called");
});

// Task 3
app.put("/api/test/put",(req,res)=>{
    res.send("Put API working successfully");
    console.log("Put API called");
});

//Task 4
app.delete("/api/test/delete",(req,res)=>{
    res.send("Delete API successfully");
});

// Task 5
mongoose.connect("mongodb://127.0.0.1:3000/test")
// .then(() => {
//     console.log("MongoDB connected successfully");
// })
// .catch((error) => {
//     console.log("MongoDB connection failed", error);
// });


app.listen(3000,()=>{
    console.log("server is running at port number 3000");
})