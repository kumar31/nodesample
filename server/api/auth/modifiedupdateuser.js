//module is use to update user.

'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.0.169/smaatemp';

function getupdatedata(updatedata){
	return updatedata;
}

module.exports = function(updatedata,callback){
		
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var myquery = updatedata;
	  var newvalues = {$set: {password: "123"} };
	  db.collection("smaatuser").updateOne(myquery, newvalues, function(err, res) {
		if (err) throw err;
		console.log(res.result.nModified + " record(s) updated");
		db.close();
		var rest = getupdatedata(updatedata);
		return callback(rest);
	  });
	});
	
	
};