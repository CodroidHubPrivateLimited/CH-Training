const express = require("express")
const {SaveDataController} = require("../All Controllers/userDataSave")

const router= express.Router()

router.post('/firs/seggrigated/post', SaveDataController);

module.exports = router;
