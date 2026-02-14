const userData = require("../../allModels/model")



exports.deleteUserData = async(req, res)=>{
    try{
        const data= await userData.findByIdAndDelete(req.params.id);
        console.log(data)
        res.json(data)

    }catch(error){
           console.log(error)
    }
}