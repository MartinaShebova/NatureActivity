const express = require('express');
const bodyParser = require('body-parser');
const init = (data) => {
    const app = express();
    let getIndexHtml = function (req, res) {
        require('fs').readFile('./public/index.html', 'utf8', function (err, text) {
            if (err) {
                console.log(err);
                return;
            }
    
            res.send(text);
        });
    };
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', getIndexHtml);    
    require('./api-routes')(app, data);

    app.use('/static', express.static(__dirname + './../../public'));    
    app.use('/build', express.static(__dirname + './../../build'));    
    app.use('/libs', express.static(__dirname + './../../node_modules'));    
    
    return Promise.resolve(app);
};

module.exports = { init };