1 进入活动入口
  url: "localhost:3908/meetyou/start"
  params: nil
  response: 
 
2 活动主页
  url: "localhost:3908/meetyou/"
  params: nil
  response: 
    data为:{share_url: client.getAuthorizeURL(url + openid, '0', 'snsapi_userinfo')};
  	return res.render('meetyou/index',data); 
  	在页面var data =  <%- share_url %>获取分享url
3 分享过后，查看兑奖码主页
  url: "localhost:3908/meetyou/getCodePage"
  params: nil
  response: 
  	(1) return res.send(code: 500,msg: 'server inner error',data: err})
  	(2) return res.render("meetyou/codeResult",{code: 403,msg: '每人最多只能拥有3个兑奖码哦',data: ''});
  	(3) return res.render("meetyou/codeResult",{code: 200,msg: 'successfully',data: result});
4 查询自己的兑奖码
  url: "localhost:3908/meetyou/getCodeByOpenid"
  params: nil
  response:
  	(1) return res.send({code: 500,msg: 'server inner error',data: err});
  	(2) return res.send({code: 200,msg: "successfully",data: result});
5 好友助力页面
  url: "localhost:3908/meetyou/friendPage/:f_openid"	
  params: f_openid
  response:
  	return res.send('meetyou/friendPage',{f_openid: f_openid});
6 助力抽奖界面事件
  url: "localhost:3908/meetyou/getFriendCode"
  params: 
  	type:      YES || NO  YES为“我也想你了 助力抽奖” 按键   NO 为 “我有其他安排” ；  不设值时 为分享功能，分享成功时返回 getCodePage（分享过后，查看兑奖码主页）
  response:
  	(1) return res.send({code: 500,msg: 'server inner error',data: err});
  	(2) return res.render('meetyou/friendPageResultYes');   return res.render('meetyou/friendPageResultNo'); return res.render('/getCodePage');
