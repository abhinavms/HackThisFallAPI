const userCollection = require('../app').collection("Users");
const twilio = require('../config').twilio;
const client = require('twilio')(twilio.accountSid, twilio.authToken);

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
        client.messages
            .create({
                body: ${message}! SOS! ${user.firstname} is requesting help at coordinates: https://www.google.com/maps/search/?api=1&query=${lat},${long},
               from: '+12058469725',
               to: "+91" + contact.phoneno,
             })
             .then(message => console.log(message.sid));
            console.log("Sending SOS to " , contact.name, " at ", contact.phoneno);
        });
        res.status(200).json({"status" : "SOS sent"});
    }
    else {
        res.status(400).json({"status" :"User not found"});
    }
}