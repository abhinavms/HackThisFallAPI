const User = require('../model/User');
const userCollection = require('../app').collection("Users");

exports.check = async (req, res) => {
    const user = req.query.user;
    await userCollection.findOne({_id: user}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            if (result) {
                res.status(200).send({
                    "Status" : "User exists", 
                    "Result" : result
                });
            } else {
                res.status(200).send({"Status" : "User does not exist"});
            }
        }
    });
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