const userCollection = require('../app').collection("Users");

exports.sendSOS = async (req, res) => {
    const id = req.body.user;
    const lat = req.body.lat;
    const long = req.body.long;
    const message = req.body.message;
    
    console.log(id + " " + lat + " " + long + " " + message);

    const user = await userCollection.findOne({_id: id});
    
    if (user) {
        contacts = user.contacts;
        contacts.forEach(async contact => {
            console.log("Sending SOS to " , contact.name, " at ", contact.phoneno);
        });
        res.status(200).send("SOS sent");
    }
    else {
        res.status(400).send("User not found");
    }
}