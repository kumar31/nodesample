
'use strict';

var utils = {
	setmydb:function(){
		
		if(process.env.db.trim() == 'rajesh'){
			return 'mongodb://54.148.253.35/smaatemp';
		}else{
			return 'mongodb://192.168.0.169/smaatemp';
		}
	}
}
module.exports = utils;