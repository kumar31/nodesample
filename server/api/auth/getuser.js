//module is use to get all users from db.

'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.0.169/smaatemp';
var result = [];
var user = {
	getuser:function(callback){
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection("smaatuser").find().toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
			callback (result);
		  });
		});
		
	}
}
module.exports = user;