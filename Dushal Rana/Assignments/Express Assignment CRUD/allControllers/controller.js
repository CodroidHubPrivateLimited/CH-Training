
const User = require("../allModels/models")


//Question 1
exports.addUser = async (req,res)=>{
try{
    const data= await User.create(req.body)
    console.log(data);
    res.json(data)

}catch(err){
    console.log(err)
}
}

//Question 2
exports.getAllUsers = async (req, res) => {
try{
    const users = await User.find();
    console.log(users);
    res.json(users)

}catch(err){
    console.log(err)
}
}

//Question 3
exports.userId = async (req, res) => {
try{
    const showUsers = await User.findById(req.params.id);
    console.log(showUsers);
    res.json(showUsers)

}catch(error){
    console.log("Error found", error);
}
}

//Question 4

exports.userUpdate = async (req,res)=>{
try{
    const updateData= await User.findByIdAndUpdate(req.params.id, req.body)
    console.log(updateData);
    res.json(updateData)

}catch(err){
    console.log(err)
}
}

//Question 5

exports.userDelete = async (req,res)=>{
try{
    const deleteData= await User.findByIdAndDelete(req.params.id)
    console.log(deleteData)
    res.json(deleteData)

}catch(err){
    console.log(err)
}
}


//Question 6
exports.byEmail = async (req, res) => {
try{
    const byEmailData = await User.find({ email: req.query.email });
    console.log(byEmailData);
    res.json(byEmailData)
}
catch(error){
    console.log("Error found", error);
}
}

