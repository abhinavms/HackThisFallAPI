const config = require('../config');
const User = require('../model/User');
const userCollection = require('../app').collection("Users");

exports.check = async (req, res) => {
    res.json({"status" : "Not Implemented"});
};

exports.register = async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    console.log(user);
    await userCollection.insertOne(user, (err, result) => {
        if (err) {
            res.status(500).json({"status" : "Error"});
        } else {
            res.json({"status" : "User Created"});
        }
    });
};