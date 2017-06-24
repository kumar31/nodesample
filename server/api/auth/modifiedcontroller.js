'use strict';

var createuser_controller = require('./modifiedcreateuser.js');
var updateuser_controller = require('./modifiedupdateuser.js');
var getuser_controller = require('./modifiedgetuser.js');
var deletes_controller = require('./modifieddeleteuser.js');

var auth = {

	//Createuser function 
	createuser: function(req,res){
		try{
				 
			createuser_controller(req.body,function(error,responce){
				
					  if(error)res.json({"status":'Error','msg':error});
				res.json(responce);
			});
		}catch(e){
			res.json({"status":'Error','msg':e});
		}
	},
	
	//Get user function 
	getuser: function(req,res){
		
			try{
				getuser_controller(function(responce){
					res.json(responce);
				});
			}catch(e){
				res.json("Some thing went wrong");
			}
		
	},
	//Update and get user function 
	updateuser: function(req,res){
		
		try{
			updateuser_controller(req.body,function(responce){
				
				res.json(responce);
			});
		}catch(e){
			res.json("Some thing went wrong");
		}
		
	},
	//Delete user function 
	deleteuser: function(req,res){
		
		try{
			deletes_controller(req.body,function(responce){
				res.json(responce);
			});
		}catch(e){
			res.json("Some thing went wrong");
		}
	}
}

module.exports = auth;