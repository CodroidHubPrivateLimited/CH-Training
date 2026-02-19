const bcrypt = require("bcrypt");
const userData = require("../../All Models/Login Registration model/registrationModel");

exports.userRegister = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const checkUser = await userData.findOne({ email });

    if (checkUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userData.create({
      name: fullName,   
      email,
      password: hashPassword
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user: newUser
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
