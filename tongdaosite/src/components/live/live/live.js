
/*//TODO 鼠标往下滚动样式
$('body').css('height',window.innerHeight*1.05+'px');
var bannertop= 0,livetop=parseFloat($('#live').css('top'));
function scroll() {
    var beforeScrollTop = $(window).scrollTop();
    var fn = fn || function(){};
    $(window).on('scroll',function(){
        var afterScrollTop = $(window).scrollTop();
        var direction = afterScrollTop - beforeScrollTop;
        if( direction === 0 ) return false;
        fn( direction > 0 &&$('#banner').css('top',window.innerHeight*0.9+'px').parents('body').find('#live').css('top',(window.innerHeight*0.9-550)/2+50+'px').parents('body').find('#nav').removeClass('black'));
        beforeScrollTop = afterScrollTop;
    })
}*/
var currentIdx;
//scroll();
/*setTimeout(function(){
    $('#banner').css('top',window.innerHeight*0.9+'px').parents('body').find('#live').css('top',(window.innerHeight*0.9-550)/2+50+'px').parents('body').find('#nav').removeClass('black')
},2000)*/
//TODO 图片上文字定位
$('#banner span').css('height',$('#banner span').css('width'));
$('#banner p').css('top',parseFloat($('#banner span').css('top'))+parseFloat($('#banner span').css('height'))+10+'px')
/*//TODO 右侧列表使用swiper,实现滚轮效果
function loadlist(){
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide:false,
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });
}*/

//TODO 其他比赛调用
function other(leagueid){
    $.ajax({
        url:'../live/list/'+leagueid+'/0',
        type:'get',
        async:false,
        success:function(data){
            if(data.resultcode==1000){
                var li='';
                i=0;
                $(data.lives).each(function(){
                    //if(this.category_id==1){
                    var score;
                    if(this.livestatus==2&&(this.hostscore!=undefined&&this.hostscore!=null)){
                        score=this.hostscore+':'+this.clientscore;
                    }else{
                        score='<img src="../img/fanslive/VS.png" alt="" class="vs"/>' ;
                    }
                    li+='<li class="live'+this.livestatus+'" urlstatus='+this.urlstatus+' liveid='+this.id+'> <h3 class="title">'+this.gametime.split(" ")[0].slice(5)+' / '+this.gametime.split(" ")[1].slice(0,5)+'</h3> <div class="content"> <p class="host"> <img src="'+moren(this.hostlogo)+'" alt=""/> <span>'+this.hostname+'</span> </p> <div class="vs"> <span class="status">-'+['未开始','进行中','已结束'][this.livestatus]+'-</span><span>'+score+'</span>  <img src="../img/fanslive/bofang_m.png" alt="" class="bofang"/> </div> <p class="client"> <img src="'+moren(this.clientlogo)+'" alt=""/> <span>'+this.clientname+'</span> </p> </div> </li>';
                    //}
                })
                if(data.lives.length==0){
                    li+="<li style='background: #000;color: #fff;text-align: center;border: 0;padding-top: 15px;'>暂无直播比赛</li>";
                }
                $('#live .livelist').append(li)
                //$('#live .livelist li:first-child').addClass('active');
                //loadlist();
                if(currentIdx!=undefined){
                    $('#live .livelist li:nth-child('+currentIdx+')').addClass('active');
                }
            }else if(data.resultcode==999){
                $('#live .livelist').append("");
            }else{
                layer.msg(data.msg,{icon: 7});
            }
        },
        error:function(){
            layer.msg('直播链接请求出错',{icon: 5});
        }
    })
}

//other(169);
//other(26);
load();
//TODO 请求直播列表接口
function load(){
    $.ajax({
    	url:'../live/web',
        type:'get',
        async:false,
        success:function(data){
            if(data.resultcode==1000){
                var li='';
                i=0;
                $(data.lives).each(function(){
                	var score;
	                if(this.livestatus==2&&(this.hostscore!=undefined&&this.hostscore!=null)){
	                    score=this.hostscore+':'+this.clientscore;
	                 }else{
	                    score='<img src="../img/fanslive/VS.png" alt="" class="vs"/>' ;
	                 }
	                 li+='<li class="live'+this.livestatus+'" urlstatus='+this.urlstatus+' liveid='+this.id+'> <h3 class="title">'+this.gametime.split(" ")[0].slice(5)+' / '+this.gametime.split(" ")[1].slice(0,5)+'</h3> <div class="content"> <p class="host"> <img src="'+moren(this.hostlogo)+'" alt=""/> <span>'+this.hostname+'</span> </p> <div class="vs"> <span class="status">-'+['未开始','进行中','已结束'][this.livestatus]+'-</span><span>'+score+'</span>  <img src="../img/fanslive/bofang_m.png" alt="" class="bofang"/> </div> <p class="client"> <img src="'+moren(this.clientlogo)+'" alt=""/> <span>'+this.clientname+'</span> </p> </div> </li>';
                })
                if(data.lives.length==0){
                    li+="<li style='background: #000;color: #fff;text-align: center;border: 0;padding-top: 15px;'>暂无直播比赛</li>";
                }
                $('#live .livelist').append(li)
                //$('#live .livelist li:first-child').addClass('active');
                //loadlist();
                if(currentIdx!=undefined){
                    $('#live .livelist li:nth-child('+currentIdx+')').addClass('active');
                }
            }else if(data.resultcode==999){
                if($('#live .livelist').html()==''){
                    $('#live .livelist').append("<li style='background: #000;color: #fff;text-align: center;border: 0;padding-top: 15px;'>暂无直播比赛</li>");
                }
            }else{
                layer.msg(data.msg,{icon: 7});
            }
        },
        error:function(){
            layer.msg('直播链接请求出错',{icon: 5});
        }
    })
}

var liveid=window.location.href.split('=')[1];
if(liveid){
    $('#live .livelist li[liveid="'+liveid+'"]').addClass('active')
    loadlive(liveid,0);
}
$('#live .livelist').on('click','li.live1',function(){
    currentIdx=$(this).index('#live .livelist li')+1;
    if($(this).attr('urlstatus')=='undefined'){
        var urlstatus=0;
    }else{
        var urlstatus=$(this).attr('urlstatus');
    }
    var id=$(this).attr('liveid');
    loadlive(id,urlstatus);

})
function loadlive(id,urlstatus){
    $.ajax({
        url:'../live/url/web/'+id+'/'+urlstatus,
        type:'get',
        success:function(data){
            if(data.resultcode==1000){
                if(data.url.indexOf('letv')!=-1) {
                    $('iframe').attr('src', data.url);
                }else if(data.url.indexOf('cfadata.cn')!=-1){
                    player(data.url);
                    $('iframe').hide();
                    $('#J_prismPlayer').show();
                }else{
                    window.open(data.url);
                }
            }else{
                layer.msg(data.msg,{icon: 7});
            }
        },
        error:function(){
            layer.msg('直播链接请求出错',{icon: 5});
        }
    })
    $(this).addClass('active').siblings('li.active').removeClass('active');
    $(this).children().find('img.bofang').attr('src','../img/fanslive/bofang_z.png');
    $(this).siblings().children().find('img.bofang').attr('src','../img/fanslive/bofang_m.png');
}
$('#live .livelist').on('click','li.live0',function(){
   /* $('#alert').show();
    $('#alert .alert p').html('直播暂未开始');*/
    layer.msg('直播暂未开始',{icon: 7});
})
$('#live .livelist').on('click','li.live2',function(){
   /* $('#alert').show();
    $('#alert .alert p').html('直播已结束');*/
    layer.msg('直播已结束',{icon: 7});
})
$('#alert .alert span').click(function(){
    $('#alert').hide();
})
//TODO 阿里云播放器配置
function player(videourl){
    var player = new prismplayer({
        id: "J_prismPlayer", // 容器id
        source: videourl,// 视频地址
        autoplay: true,    //自动播放
        width: "calc(100% - 320px)",       // 播放器宽度
        height: "475px" ,     // 播放器高度
        cover:'/Public/Home/img/live/bofangyulan.png',
        //TODO 2018-3-27 去除播放器左上角logo
        waterMark:''   //水印
        //waterMark:"http://www.cfadata.cn/img/fans/livelogo.png|TL|0.25|1"
        //isLive:true
    });
}
setInterval(load,240000);
//点击播放按钮
$('#banner span').click(function(){
    $('#banner').css('top',window.innerHeight*0.9+'px').parents('body').find('#live').css('top',(window.innerHeight*0.9-550)/2+50+'px').parents('body').find('#nav').removeClass('black')
})
function moren(logo){
    return logo==undefined?"../img/live/moren.png":logo;
}