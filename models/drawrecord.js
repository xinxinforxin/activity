'use strict';

var mongoose = require('mongoose');

var drawrecordModel = function() {

	var drawrecordSchema = mongoose.Schema({
		openid: String, //参与者openid
		user_info: Object, //直接把微信的信息放进来，不用分太细，只需要查询去分就好
		datetime: String, //日期时间
		map: Number, //拼图
		f_openid: String, //参与者openid-朋友
		f_user_info: Object, //朋友的信息
		info: String //信息
	});

	return mongoose.model('Drawrecord', drawrecordSchema, 'drawrecord');
};

module.exports = new drawrecordModel();