//module is use to get all users from db.

'use strict';
var MongoClient = require('mongodb').MongoClient;
var utils = require('./../../utils/utils.js');
console.log(utils.setmydb());
module.exports = function(callback){
	MongoClient.connect(utils.setmydb(), function(err, db) {
	  if (err) throw err;
	  db.collection("smaatuser").find().toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
		callback (result);
	  });
	});
	
};