var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var parrots = db.collection('parrots');
	parrots.find( {
		"age": {
			$gt: +age
		}
	}).toArray(function(err, parrot) {
		if (err) throw err;
		console.log(parrot);
		db.close();
	});
});


/*
var findParrots = function(db, callback) {
	var collection = db.collection("parrots");
	var cursor = collection.find( { "age": { $gt: X } }).toArray(function(err, doc) {
		assert.equal(err, null);
		if (doc != null) {
			console.log(doc);
		} else {
			callback();
		}
		db.close();
	});	
};

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findParrots(db, function() {
		console.log('near to db.close()');
		db.close();
	})
})

/*
db.parrots.find({
	"age": {
		$gt: process.argv[2].parseInt()
	}
});
*/
