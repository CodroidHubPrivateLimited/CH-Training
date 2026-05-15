
const express = require("express")
const {userRegister} = require("../allControllers/userRegistration/userRegistration")
const {userLogin} = require("../allControllers/userLogin/userLogin")
const {getUserData}= require("../allControllers/getAllData/getUserData")
const {deleteUserData}= require("../allControllers/getAllData/delete")
const {userRegisterUpdate}= require("../allControllers/userUpdate/update")

const router= express.Router()

router.post('/user/registration', userRegister);
router.post('/user/login', userLogin);
router.get('/get/userData', getUserData)
router.put('/user/registration/update/:userId', userRegisterUpdate);

router.delete('/delete/userData/:id',deleteUserData)

module.exports = router;