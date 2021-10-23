const config = require('./config');
const mongodb = require('mongodb');
const io = require('socket.io')();

mongodb.connect(config.databaseURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db();
    const app = require('./api');
    const serverInstance = app.listen(config.port, () => {
        console.log(` ===== API listening on port ${config.port} ===== `);
    });

    io.attach(serverInstance);
    
    io.on('connection', (socket) => {
        
        var onevent = socket.onevent;
        socket.onevent = function (packet) {
            var args = packet.data || [];
            onevent.call (this, packet);
            packet.data = ["*"].concat(args);
            onevent.call(this, packet);
        };

        console.log('User connected');
    
        socket.on('*', (event, message) => {
            io.emit(event, message);   
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
})