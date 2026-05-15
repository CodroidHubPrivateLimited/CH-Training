const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { error } = require("node:console")
const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/schoolDB")
.then(()=>{
    console.log("mongoose is connected")
}).catch((error)=>{
    console.log(error)
})

app.use("/api", require("./allRouters/router"))



app.listen(3000,()=>{
    console.log("server is run on port no 3000")
})
