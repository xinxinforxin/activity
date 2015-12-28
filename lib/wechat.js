// var config;

// exports.init = function(config) {
// 	config = {
// 		token: config.token,
// 		appid: config.AppID,
// 		encodingAESKey: config.EncodingAESKey
// 	};
// };

// exports.config = function() {
// 	return config;
// };
var OAuth = require('wechat-oauth');
var client = new OAuth('wx1f81594a378dfc85', 'e71bc73ce7e7301fbe50da27ed75d437');

var WechatAPI = require('wechat-api');
var api = new WechatAPI("wx1f81594a378dfc85", "e71bc73ce7e7301fbe50da27ed75d437 ");
//生成二维码
// api.createLimitQRCode(100, q(err, ticket) {
// 	console.info(api.showQRCodeURL(ticket.ticket));
// });

//上传图片
// api.uploadMaterial('/Users/qiufeng/Documents/resource/yea/pic/yezi.jpg', 'image', function(err, result) {
//     console.log('err:',err);
//     console.log('result:',result);
// });

//生成授权链接
var url = client.getAuthorizeURL('https://h5.yeamoney.cn/luckdraw/infooauth', '', 'snsapi_userinfo');
console.log('url:',url);

//生成菜单
// api.createMenu({
// 	"button": [{
// 		"name": "朗朗",
// 		"sub_button": [{
// 			"type": "click",
// 			"name": "往期中奖...",
// 			"key": "wangqizhongjiang"
// 		}, {
// 			"type": "click",
// 			"name": "我要票",
// 			"key": "woyaopiao"
// 		},{
// 			"type": "click",
// 			"name": "新闻发布会",
// 			"key": "xinwen"
// 		},{
// 			"type": "click",
// 			"name": "实用指南",
// 			"key": "shiyong"
// 		}]
// 	}, {
// 		"name": "调戏",
// 		"sub_button": [{
// 			"type": "click",
// 			"name": "看美女",
// 			"key": "kanmeinv"
// 		}, {
// 			"type": "click",
// 			"name": "看金融",
// 			"key": "kanjinrong"
// 		}, {
// 			"type": "click",
// 			"name": "看趣闻",
// 			"key": "kanquwen"
// 		}]
// 	}, {
// 		"name": "我",
// 		"sub_button": [{
// 			"type": "view",
// 			"name": "来找我",
// 			"url": "http://dwz.cn/25OKWy"
// 		}, {
// 			"type": "click",
// 			"name": "要玩我",
// 			"key": "yaowanwo"
// 		}, {
// 			"type": "click",
// 			"name": "赚钱",
// 			"key": "zhuanqian"
// 		}]
// 	}]
// }, function(e,w) {
// 	console.log(e);
// 	console.log(w);
// });