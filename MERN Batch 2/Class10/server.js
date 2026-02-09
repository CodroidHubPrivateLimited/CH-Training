const express = require("express")
const mongoose =  require("mongoose")
const cors=require('cors')
const DushalSaveingRoute = require("./BackendManagement/All Routes/route")

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


app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})