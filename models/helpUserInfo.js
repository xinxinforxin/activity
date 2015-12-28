'use strict';

var mongoose = require('mongoose');

var helpUserInfoModel = function() {

	var helpUserInfoSchema = mongoose.Schema({
		openid: String,
		helpUserOpenId: String,
		helpUserInfo: Object, 
		createdTime: String, 
	});

	return mongoose.model('HelpUserInfo', helpUserInfoSchema, 'helpUserInfo');
};

module.exports = new helpUserInfoModel();
