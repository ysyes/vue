axios.post('../common/signature',{url:window.location.href.split("#")[0]}).then(function (response) {weichart(response.data)})
function weichart(data) {
	var urls = window.location.href.split("#")[0];
	if (urls.split("?")[1] && urls.split("?")[1].split("&") && urls.split("?")[1].split("&")[0].split("=")[0]=="id") {
		urls = window.location.href.split("#")[0];
	} else{
		urls = 'http://www.cfadata.cn/winterTraining/share.html'
	}
	
	wx.config({
	    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: data.appid, //必填，公众号的唯一标识
	    timestamp: data.timestamp,// 必填，生成签名的时间戳
	    nonceStr: data.noncestr, // 必填，生成签名的随机串
	    signature: data.signature,// 必填，签名，见附录1
	    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(function(){
		//朋友圈
		wx.onMenuShareTimeline({
		    title:"冬训服务-北京同道伟业",
		    link: urls,
		    imgUrl: 'https://www.cfadatabase.cn/footballdata/live/img/logo.png'
		});
		//好友
		wx.onMenuShareAppMessage({
		    title:"冬训服务-北京同道伟业", // 分享标题
		    desc: '同道伟业是一家以足球大数据服务为驱动的数据业务和赛事版权营销公司', // 分享描述
		    link: urls, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		    imgUrl: 'https://www.cfadatabase.cn/footballdata/live/img/logo.png',// 分享图标
		    type: '',// 分享类型,music、video或link，不填默认为link
		    dataUrl: ''//如果type是music或video，则要提供数据链接，默认为空
		});
		//QQ好友
		wx.onMenuShareQQ({
		    title:"冬训服务-北京同道伟业",
		    desc: '同道伟业是一家以足球大数据服务为驱动的数据业务和赛事版权营销公司',
		    link: urls,
		    imgUrl: 'https://www.cfadatabase.cn/footballdata/live/img/logo.png'
		});
		//QQ空间
		wx.onMenuShareQZone({
		    title:"冬训服务-北京同道伟业",
		    desc: '同道伟业是一家以足球大数据服务为驱动的数据业务和赛事版权营销公司',
		    link: urls,
		    imgUrl: 'https://www.cfadatabase.cn/footballdata/live/img/logo.png'
		});
		//腾讯微博
		wx.onMenuShareWeibo({
		    title:"冬训服务-北京同道伟业",
		    desc: '同道伟业是一家以足球大数据服务为驱动的数据业务和赛事版权营销公司',
		    link: urls,
		    imgUrl: 'https://www.cfadatabase.cn/footballdata/live/img/logo.png'
		});
	})		
}