'use strict';

var user = {
	//User creation
	create: function(req,res){
		res.json('create user');
	},

	//user update 
	update: function(req,res){
		res.json('update user');
	},

	//get users
	getUsers: function(req,res){
		res.json('get users');
	},

	//Delete user 
	delete: function(req,res){
		res.json('delete user');
	}

}

module.exports = user;