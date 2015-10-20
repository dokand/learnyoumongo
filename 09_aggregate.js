var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    db.collection('prices').aggregate([{
        $match: {
            size: process.argv[2]
        }
    }, {
      $group: {
        _id: 'total',
        total: {
          $avg: '$price'
        }
      }
    }]).toArray(function(err, results){
      if (err) throw err;
      if(!results.length) throw new Error('Aucun résultat trouvé');
      console.log(Number(results[0].total).toFixed(2));
      db.close();
    })
})
