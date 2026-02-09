const express = require("express")
const {RegisteringUser} = require("../All Controllers/User Registration/registration")

const router= express.Router()

router.post('/firs/seggrigated/post', RegisteringUser);

module.exports = router;
