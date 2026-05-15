require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const app = express()

app.use(cors())
app.use(express.json())


const router = require("./allRouters/router")
mongoose.connect(process.env.JWT_PATH)
.then(()=>{
     console.log("Database is connected")
}).catch((error)=>{
    console.log(error)
})

app.use("/api", router)

app.listen(3000, ()=>{
    console.log("server is run on port no 3000 ")
})
