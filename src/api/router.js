const express = require('express')
const router = express.Router()

const userController = require('../controller/userController');

 
router.get("/", (req, res)=> {
	res.json({
		"/check" : "Check if user exists",
		"/register" : "Register a new user"
	})
});

router.get("/check", userController.check);
router.post("/register", userController.register);

module.exports = router