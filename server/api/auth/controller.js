'use strict';
var createuser_controller = require('./createuser.js');
var getuser_controller = require('./getuser.js');
var updateuser_controller = require('./updateuser.js');
var deleteuser_controller = require('./deleteuser.js');
var auth = {

	//Login function 
	login: function(req,res){
		createuser_controller.create(req.body);
		res.json(createuser);
	},
	//Logout function 
	logout: function(req,res){
		res.json('logout success');
	},
	//Get user function 
	getuser: function(req,res){
		getuser_controller.getuser(function(responce){
			res.json(responce);
		}); 
		
	},
	//Update and get user function 
	updateuser: function(req,res){
		
		updateuser_controller.update(req.body,function(responce){
			res.json(responce);
		});
	},
	//Delete user function 
	deleteuser: function(req,res){
		
		deleteuser_controller.deletes(req.body);
		res.json(deleteuser);
	}
}

module.exports = auth;