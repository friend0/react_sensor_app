var MongoClient = require('mongodb').MongoClient, assert = require("assert")
// Connection URL
var url = 'mongodb://rowdy_rye:rowdy_rye@ds161038.mlab.com:61038/sensor_lake';

	// Connection URL
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

    findDocuments(''db'', function() {
      db.close();
    });
});

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('robots');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
