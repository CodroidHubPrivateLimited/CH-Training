const express = require("express")
const { addUser,getAllUsers,userId,userUpdate,userDelete,byEmail } = require("../allControllers/controller")
const router = express.Router()

router.post("/firstPost", addUser);
router.get("/firstGet", getAllUsers);
router.get("/getById/:id", userId);
router.put("/updateData/:id", userUpdate);
router.delete("/deleteData/:id", userDelete);
router.get("/byEmailData", byEmail);    

module.exports=router   