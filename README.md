# Hack This 2.0 - WithYou API

WithYou is personal safety application

## Features
- SOS- A button which sends SMS Alerts to your close contacts
- Call me now - A Fake call to yourself
- Live Location -Socket to send and read location

## Modules used
+ [mongodb](https://www.npmjs.com/package/mongodb)
+ [socket.io](https://www.npmjs.com/package/socket.io)
+ [twilio](https://www.npmjs.com/package/twilio)
+ [cors](https://www.npmjs.com/package/cors)
+ [dotenv](https://www.npmjs.com/package/dotenv)
+ [express](https://www.npmjs.com/package/express)

devDependencies
+ [nodemon](https://www.npmjs.com/package/nodemon)
 

## Installing localling 
### Install
````
curl -LOk 
https://github.com/abhinavms/HackThisFallAPI/archive/main.zip
unzip main.zip
cd  HackThisFallAPI-main
npm install
````

Update ````.env```` file with your credentials and configurations [Sample configuration in ````.env_sample````].


### Start
````
npm start
````

The API runs on port ````8000```` by default, and the root can be accessed by navigating to ````http://localhost:8000```` in your browser.


### Running in production
Both [forever](https://github.com/foreverjs/forever) and [pm2](https://github.com/Unitech/pm2) are great for keeping the API alive (and load balancing in the case of pm2).
