var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/' + process.argv[2], function(err, db) {
    db.collection(process.argv[3]).remove({
        _id: process.argv[4]
    }, function(err, data) {
        db.close();
    })
})
