var filter = require('util-format');
var mongoose = require('mongoose');
var mongo = require('./mongo');
var log4js = require('log4js');

var ejs = require('ejs');

for (var k in filter) {
	ejs.filters[k] = filter[k];
}

module.exports = function spec() {

	return {
		onconfig: function(config, next) {
			log4js.configure(config.get('log4jsConfig'), {});
			mongo.config(config.get('mongoConfig'));
			next(null, config);
		}
	};
};