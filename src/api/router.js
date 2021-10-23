const express = require('express')
const router = express.Router()

const userController = require('../controller/userController');
const sosController = require('../controller/sosController');

 
router.get("/", (req, res)=> {
	res.json({
		"/check" : "Check if user exists",
		"/register" : "Register a new user",
		"/sos" : "Send SOS message to all friends",
	})
});

router.get("/check", userController.check);
router.post("/register", userController.register);
router.post("/sos", sosController.sendSOS);

module.exports = router