const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userData = require("../../allModels/model");

exports.userRegisterUpdate = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const { userId } = req.params;
    console.log(userId);
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await userData.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Step3 : hashed Password is : ", hashPassword);

    const updatedData = await user.save();
    console.log("Step4: saved Updated data in DB: ", updatedData);

    res.status(201).json({ message: "Updation successful", updatedData });
  } catch (error) {
    console.log(error);
  }
};
