const Contact = require("../../All Models/ContactForm Model/contactModel");

exports.contactForm = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { name, email, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({
      msg: "Message sent successfully",
    });

  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      msg: "Something went wrong"
    });
  }
};
