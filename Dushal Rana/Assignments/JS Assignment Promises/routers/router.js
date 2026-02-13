
const express = require("express");
const router = express.Router();
const { addUser,getAllUsers,userUpdate,userDelete } = require("../controllers/controller");

router.post("/students", addUser);
router.get("/studentsAll", getAllUsers);
router.put("/updateData/:id", userUpdate);
router.delete("/deleteData/:id", userDelete);


module.exports = router;
