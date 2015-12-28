'use strict';

var mongoose = require('mongoose');

var exchangeCodeModel = function() {

	var exchangeCodeSchema = mongoose.Schema({
		openid: String,
		code: String,
		userInfo: Object, 
		helpUserOpenId: String,
		createdTime: String, 
	});

	return mongoose.model('ExchangeCode', helpUserInfoSchema, 'exchangeCode');
};

module.exports = new exchangeCodeModel();