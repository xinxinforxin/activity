wx.ready(function() {
	var p = {
		title: '1元钱换880元拼图换郎朗独奏会门票！！！', // 分享标题，请修改
		desc: '喊上TA结伴去听演奏会～！！', // 分享描述，请修改
		link: g_link, // 分享链接,不要动
		imgUrl: 'image/share.png', // 分享图标，需要作图，然后把链接填上去
		success: function() {},
		cancel: function() {}
	};
	wx.onMenuShareTimeline(p);
	wx.onMenuShareAppMessage(p);
	wx.onMenuShareQQ(p);
	wx.onMenuShareWeibo(p);
	wx.onMenuShareQZone(p);
});