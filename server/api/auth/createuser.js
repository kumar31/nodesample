//module is use to create user with user input.
'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.0.169/smaatemp';

var user = {
	create:function(postdata){
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var myobj = postdata;
		  db.collection("smaatuser").insert(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 record inserted");
			db.close(); 
		  });
		});
		return "user created successfully";
	}
}
module.exports = user;