var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];

MongoClient.connect(url, function(err, db) {
    if (err) console.error('AppError: An connect error occurs.', err)
    var docs = db.collection('docs');
    doc = {
        firstName: firstName, 
        lastName: lastName 
    };
    docs.insert(doc, function(err, data) {
        if (err) console.error('AppError: An inserterror occurs.', err)

        console.log(JSON.stringify(doc)); 
        //console.log('uh oh')
        db.close();
    })
});
