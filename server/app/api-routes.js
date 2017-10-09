const { ObjectID } = require('mongodb');

const imageUrlsCollection = 'imageUrls',
      commentsCollection = 'comments',
      earthquakesFeed = 'earthquakesFeed';    
const ajaxRequests = (app, db) => {

    app.get('/api/getMediaFile', (req, res) => {

        db.collection(imageUrlsCollection).find({}).toArray()
            .then((allfiles) => {
                res.status(200).json(allfiles);
            });
    });

    app.get('/api/getEarthquakes', (req, res) => {
        
        db.collection(earthquakesFeed).find({}).toArray()
            .then((allfiles) => {
                res.status(200).json(allfiles);
            });
    });
    
    app.post('/api/postMediaFile', (req, res) => {
        db.collection(imageUrlsCollection).insert({ imgUrl: req.body.userImgUrl })
        .then(() => {
            res.status(200).send('Successfully added image url to DB');           
        }, () => {
            res.status(400).send('An error occured');  
        });
    });

    app.get('/api/getComments/:id', (req, res) => {
        
        db.collection(commentsCollection).find({ eventId: req.params.id}).toArray()
        .then((allfiles) => {            
            res.status(200).json(allfiles);
        });

    });

    app.post('/api/postComment', (req, res) => {
        db.collection(commentsCollection).insert(req.body)
        .then(() => {
            res.status(200).send('Successfully recorded comment into DB');           
        }, () => {
            res.status(400).send('An error occured');  
        });
    });

    app.get('/api/getSingleEvent/:id', (req, res) => {
        console.log(req.params.id);
        
        db.collection(earthquakesFeed).find({ _id: new ObjectID(req.params.id) }).toArray()
        .then((allfiles) => {            
            res.status(200).json(allfiles);
        });

    });

};

module.exports = ajaxRequests;