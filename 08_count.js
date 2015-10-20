var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    db.collection('parrots').count({
        'age': {
            $gt: +process.argv[2]
        }
    }, function(err, count) {
    	console.log(count);
        db.close();
    })
})
