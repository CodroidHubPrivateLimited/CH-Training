const express = require("express")
const User= require("../Models/model")

exports.savingdata = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);

    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Error saving data" });
  }
};
