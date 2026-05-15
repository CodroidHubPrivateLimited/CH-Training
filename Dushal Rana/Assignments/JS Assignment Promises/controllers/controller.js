const User = require("../models/model")


exports.addUser = async (req,res)=>{
try{
    const data= await User.create(req.body)
    console.log(data);
    res.json(data);

}catch(err){
    console.log(err)
}
}

exports.getAllUsers = async (req, res) => {
try{
    const users = await User.find();
    console.log(users);
    res.json(users)

}catch(err){
    console.log(err)
}
}


exports.userUpdate = async (req,res)=>{
try{
    const updateData= await User.findByIdAndUpdate(req.params.id, req.body)
    console.log(updateData);
    res.json(updateData)

}catch(err){
    console.log(err)
}
}


exports.userDelete = async (req,res)=>{
try{
    const deleteData= await User.findByIdAndDelete(req.params.id)
    console.log(deleteData)
    res.json(deleteData)

}catch(err){
    console.log(err)
}
}