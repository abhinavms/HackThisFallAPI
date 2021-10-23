const userCollection = require('../app').collection("Users");

exports.fakeCall = async (req, res) => {
    const id = req.body.user;
    const user = await userCollection.findOne({_id: id});
    
    if (user) {
        contacts = user.contacts;
        contacts.forEach(async contact => {
            console.log("Sending SOS to " , contact.name, " at ", contact.phoneno);
        });
        res.status(200).send("Fake Call sent");
    }
    else {
        res.status(400).send("User not found");
    }
}