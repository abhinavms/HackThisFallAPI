const dotenv = require('dotenv');

const envFound = dotenv.config();

const config = {
    port: parseInt(process.env.API_PORT) || parseInt(process.env.PORT) || 8000,
    databaseURL: process.env.MONGODB_URI,
};

if (!config.databaseURL) {
    throw new Error("MongoDB URL not found in environment variables");
}

module.exports = config;