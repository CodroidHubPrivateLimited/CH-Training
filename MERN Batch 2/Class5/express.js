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
const express= require('express'); //>> Importing express module
const app= express(); //>> Createing express app





// Methods:>> GET, POST, PUT, DELETE


app.get("/meriPheli/GetApi",(req, res)=>{
    try{
    res.send("Get method run ho raha hai");
    console.log("Get method run ho raha hai")
    }catch(error){

        console.log("Ye backend ka error hai",error)
    }
})








app.listen(3000,()=>{ // >> Createing/Humara server 3000 port mai run krr raha hai;
    console.log("Server is running at port 3000") //>> Callback function jo server start hone kai baad run krega;
    })

