//module is use to create user with user input.
'use strict';
var MongoClient = require('mongodb').MongoClient;
var utils = require('./../../utils/utils.js');
console.log(utils.setmydb());
module.exports = function (postdata,callback){
	MongoClient.connect(utils.setmydb(), function(err, db) {
	  console.log('calling');
	  if (err) return callback(err,{});
	  var myobj = postdata;
	  db.collection("smaatuser").insert(myobj, function(err, res) {
		console.log('calling');
		if (err) return callback(err,{});

		console.log("1 record inserted");
		db.close();
		return callback(null,res);
	  });
	});
	
}

