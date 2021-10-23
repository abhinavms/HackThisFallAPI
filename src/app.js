const config = require('./config');
const mongodb = require('mongodb')

mongodb.connect(config.databaseURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db();
    const app = require('./api');
    app.listen(config.port, () => {
        console.log(` ===== Dashboard API listening on port ${config.port} ===== `);
    });
})