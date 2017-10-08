const imageUrlsCollection = 'imageUrls';
const commentsCollection = 'comments';
const ajaxRequests = (app, db) => {

    app.get('/api/getMediaFile', () => {
        // this returns a promise
        return db.collection(imageUrlsCollection).find({}).toArray();
    });

    app.post('/api/postMediaFile', (req, res) => {
        db.collection(imageUrlsCollection).insert({ imgUrl : req.body.userImgUrl });
        res.send('Success');
    });

    app.get('/api/getComments', () => {
        // this returns a promise
        return db.collection(commentsCollection).find({}).toArray();
    });

    app.post('/api/postComment', (req, res) => {
        db.collection(commentsCollection).insert({ name : req.body, comment: req.body, article: req.body });
        res.send('aaaaaaaaaaaaaaaaaaaaaaaa');
    });

};

module.exports = ajaxRequests;