// // What is Node js
// // >> Node.js >> Create Runtime Environment for JavaScript>> to run the Javasript code outside the browser

// // Key Points:
// // 1. Node.js is built on Chrome's V8 JavaScript engine.
// // 2. Backend Development>> Server-Side Scripting
// // 3. Runs on the server
// // 4. Open-source and cross-platform

// // Why Node.js?
// // Problem Brfore Node.js:
// // 1. JS only run in the browser
// // 2. Backend development required different languages like PHP, Python, Ruby
// // 3. Different languages for frontend and backend
// // 4. Slower Development Process

// // Advantages of Node.js:
// // 1. Same Language for frontend and backend
// // 2. Fast and Scalable
// // 3. Large Ecosystem (NPM)
// // 4. Active Community Support
// // 5. Handles Multiple users efficiently
// // 6. Perfect Real Time Enviroment


// // 1. Node Install hai nai hai check krte hain?
// // node -v


// console.log("Hello from Node.js");



// // NPM>> Node Package Manager>> Manage Libraries and Packages for Node.js
// // npm init -y>> Create a package.json file with default settings
// // package.json>> Project Metadata and Dependencies


// // 1. Move inside the Folder and run this command 
// // >> cd FolderName
// // 2. Install all the Dependencies using below command
// // >> npm init -y
// // 3. Install all you depedency
// // >> npm i express



// // Now Makeing server
// // 1. Appni dependency ko import kiya>> const express = require("express") 
// // 2. app initialization>> const app = express();
// // 3. Run the server >> app.listen(5000,()=>{
//     // console.log("The sever is runing on port 5000")
// // })


// // npm >> install krne kai liye

// // node __filename, npx nodemon >>run krne kai liye server ko








// const express = require("express") //>> Importing the Express Library

// const app = express(); // >> initializing the App


// console.log("Hiiiia")
// app.listen(9000,()=>{
//     console.log("The sever is runing on port 9000")
// })









// What is Express js
// >>  Express.js is a flexible framework 
// >> built on the top of Node.js(i.e Javascript runtime mai dono milkai kam krte hain)
// >> used to simplifies (asani) server create and api development

// const e = require("express");

// const http= require('http');
// const server= http.createServer(req,res)=>{
//     if (req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hello from Express.js\n');
//     }
// }

// server.listen(3000)

// Express js mai hum aise kam krte hain:
// const express= require('express');
// const app= express();

// app.get('/',(req,res)=>{
//     res.send('Hello from Express.js');
// })


// app.listen(3000);

// >> Less Code + Readability Issues

// Nodejs were as express 
// 1. nodejs Low level where as express high level framework
// 2. Nodejs>> Routing manual >> where as express>> built in routing
// 3.Nodejs>> Middleware support nahi krta >> where as express mai hota hai
// 4. Nodejs.Readabilty Complex>>Where as express>> Readability easy



//  Creating Server>>
// 1. npm init -y>> creates package.json file>> jo ye file hoti hai uskai ande humari jitni bhi dependencies hoti hai vo store hoti hai ;
// 2. npm install express>> node package manager ye humare express ki dependency ko install krta hai;
// const express= require('express'); //>> Importing express module
// const app= express(); //>> Createing express app





// // Methods:>> GET, POST, PUT, DELETE


// app.get("/meriPheli/GetApi",(req, res)=>{
//     try{
//     res.send("Get method run ho raha hai");
//     console.log("Get method run ho raha hai")
//     }catch(error){

//         console.log("Ye backend ka error hai",error)
//     }
// })








// app.listen(3000,()=>{ // >> Createing/Humara server 3000 port mai run krr raha hai;
//     console.log("Server is running at port 3000") //>> Callback function jo server start hone kai baad run krega;
//     })










// Server makeing using Nodejs and Express

const express = require("express")   //>> Importing dependency>> express
const  mongoose = require("mongoose")
const cors =require("cors") 

const RoutePost= require("./BackendMangement/Routes/route")

const app = express();         //>> app initialization


//  Middlewares are of 2 types >> 1. Inbuilt Middleware >> 2.Coustomized Middleware
// 1. CORS Middleware >> CORS ORIGIN Resource Shreing
// 2, Express.js Middleware
app.use(express.json())
app.use(cors())
// Mongo DB Connection 
// 1. mongoose dependency install
//2. MongoDB Localhost user krlenge

// Mongoose ko connect 
// >> mongoose.connect() method 
mongoose.connect("mongodb://localhost:27017/Databa")
    .then(() => {
        console.log("MongoDb is Connected");
    })
    .catch((err) => {
        console.error(err);
    });
// FORM DATA:
// EMAIL; PASSWORD; First NAME; LAST NAME; AGE, PHONE NUMBER

// MONGODB SCHEMA >> 1. Taki humari fiormatting age peeche na ho; 2. Feilds kai types Declare 




app.post("/post", async (req,res)=>{

try{
    const data= await UserSchemaModel.create(req.body)
    console.log(data);
    res.json(data)

}catch{
(err)=>{
    console.log(err)
}
}
})


app.get("/get", async (req,res)=>{
try{
    const data= await UserSchemaModel.find()
    console.log(data[8].firstName);
    res.json(data)

}catch{
(err)=>{
    console.log(err)
}
}
})



app.delete("/delete/:id", async (req,res)=>{
try{
    const data= await UserSchemaModel.findByIdAndDelete(req.params.id);
    console.log(data);
    res.json(data)

}catch{
(err)=>{
    console.log(err)
}
}
})




app.put("/put/:id", async (req,res)=>{
try{
    const data= await UserSchemaModel.findByIdAndUpdate(req.params.id, req.body );
    console.log(data);
    res.json(data)

}catch{
(err)=>{
    console.log(err)
}
}
})




function Dushal(){
    console.log("Hii This is Normal Function")
}



Dushal()



function Sunanda(name){
    console.log("Hii this is Paramiterized function " + name)
}
Sunanda("Uday")

const Uday = ()=>{
     console.log("Hii This is Arrow Function")
}

Uday()

const date=(date)=>{
    console.log("Todays's date is : "+ date)
}
date("19-1-26")

function ASyncBananeKailiye(){
    setTimeout(()=>{
        console.log("Hi i am Asyncronous")
    },2000)
}
ASyncBananeKailiye()
console.log("Hi i am Syncronous")
console.log("Hi i am Syncronous")
console.log("Hi i am Syncronous")
console.log("Hi i am Syncronous")
console.log("Hi i am Syncronous")
console.log("Hi i am Syncronous")




// >> 4 Types >> GET >> POST >> PUT >> DELETE

// >> METHODS 
app.get("/udays/firstGetCall", (req,res)=>{
res.send("Uday's First Get API  CALL IS HITTED")
console.log("Uday's First Get API  CALL IS HITTED")
})

app.post("/udays/firstPOSTCall", (req,res)=>{
res.send("Uday's First post API  CALL IS HITTED")
console.log("Uday's First post API  CALL IS HITTED")
})

app.put("/udays/firstPUTCall", (req,res)=>{
res.send("Uday's First put API  CALL IS HITTED")
console.log("Uday's First put API  CALL IS HITTED")
})

// app.delete("/udays/firstDeleteCall", (req,res)=>{
// try{
// res.send("Uday's First delete API  CALL IS HITTED")
// console.log("Uday's First delete API  CALL IS HITTED")
// }catch(error){
//     console.log("this error i got when i am inside Delete API", error)
// }






app.use("/api",RoutePost )



app.listen(3000 ,()=>{
    console.log("Server is running on 3000 port")
})