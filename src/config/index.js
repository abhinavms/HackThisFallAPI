const dotenv = require('dotenv');

const envFound = dotenv.config();

const config = {
    port: parseInt(process.env.API_PORT) || parseInt(process.env.PORT) || 8000,
    databaseURL: process.env.MONGODB_URI,
    twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
    }    
};

if (!config.databaseURL) {
    throw new Error("MongoDB URL not found in environment variables");
}

module.exports = config;