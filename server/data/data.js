const MediaData = require('./media.data');

const init = (db) => {
    return Promise.resolve({
        media: new MediaData(db),
    });
};

module.exports = { init };