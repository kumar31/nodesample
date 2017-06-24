//module is use to delete user.

'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.0.169/smaatemp';


module.exports = function(deletedata,callback){
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var myquery = deletedata;
	  db.collection("smaatuser").deleteOne(myquery, function(err, obj) {
		if (err) throw err;
		console.log("1 document deleted");
		db.close();
		return callback(obj);
	  });
	});
	
};