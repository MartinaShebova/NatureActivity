const async = () => {
    return Promise.resolve();
};

const config = require('./server/config/config');

async()
    .then(() => require('./server/database-config/db').init(config.conncetionString))
    .then((data) => require('./server/app/app').init(data))
    .then((app) => {
        app.listen(config.port, () => console.log(`Server is up and running at ${config.port}`))            
    });