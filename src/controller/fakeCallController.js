const userCollection = require('../app').collection("Users");

const twilio = require('../config').twilio;
const client = require('twilio')(twilio.accountSid, twilio.authToken);

exports.fakeCall = async (req, res) => {
    const id = req.body.user;
    const user = await userCollection.findOne({_id: id});
    
    if (user) {
        client.calls.create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: "+91" + user._id,
         from: '+12058469725'
       })
      .then(call => {
          console.log(call);
          res.status(200).send("Fake Call sent");
        });
    }
    else {
        res.status(400).send("User not found");
    }
}