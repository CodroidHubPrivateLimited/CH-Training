const express = require("express")
const userData = require("../../allModels/model")

exports.getUserData = async(req, res)=>{
    try{
        const data = await userData.find()
        console.log(data)
        res.json(data)

    }catch(error){
           console.log(error)
    }
}