const express = require("express");
const { userRegister } = require("../All Controllers/User Registration/userRegistration");
const { userLogin } = require("../All Controllers/User Login/userLogin");
const { contactForm } = require("../All Controllers/Contact Form/contactController");

const router = express.Router();

router.post("/user/registrations", userRegister);
router.post("/user/login", userLogin);
router.post("/contact", contactForm);


module.exports = router;
