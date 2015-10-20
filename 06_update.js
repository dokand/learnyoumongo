var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/'+process.argv[2], function(err, db){
	if (err) throw err;
	db.collection('users').update({
		'name': 'Tina',
		'username': 'tinatime'
	},{
		$set: {
			age: 40
		}
	}, function(err, data){
		if (err) throw err;
		db.close();
	})
})
