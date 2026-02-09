const express = require("express"); 
const router = express.Router(); 
 
const { signup, login } = require("../controllers/authController"); 
const authMiddleware = require("../middleware/authMiddleware"); 
 
router.post("/signup", signup); 
router.post("/login", login); 
 
// protected route 
router.get("/profile", authMiddleware, (req, res) => { 
 res.json({ 
   message: "Welcome to profile", 
   userId: req.user.id 
 }); 
}); 
 
module.exports = router;