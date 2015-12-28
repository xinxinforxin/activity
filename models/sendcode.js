'use strict';

var mongoose = require('mongoose');

var sendcodeModel = function() {

	var sendcodeSchema = mongoose.Schema({
		oepnid: String,        //参与者openid
        code: String           //赠送码
	});

	return mongoose.model('Sendcode', sendcodeSchema, 'sendcode');
};

module.exports = new sendcodeModel();