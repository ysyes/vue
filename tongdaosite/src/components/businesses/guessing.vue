<template>
	<div class="gather_outer swiper-container" :style="{height:maxHight+'px'}">
		<div class="swiper-wrapper">
			<div class="gather swiper-slide">
				<div class="gather_left">
					<div>
						<p>体彩在线</p>
						<p>Data acquisition system for soccer game</p>
						<p>体彩在线是为彩民推送喜好赛事及每日热门赛事的直播节目。通过专家荐彩在线直播、大数据模型预测及专属情报输出分析解读比赛</p>
					</div>
					<div>
						<p>官方旗舰店</p>
						<p>Data acquisition system for soccer game</p>
						<p>同道伟业旗下的同道体育官方旗舰店在云南昆明盛装开业</p>
					</div>
				</div>
				<div class="gather_right">
					<div>
						<img src="../../assets/img/businesses/picture1.png" />
					</div>
					<div>
						<img src="../../assets/img/businesses/picture2.png" />
					</div>
				</div>
			</div>
		</div>
		
		<!--导航-->
		<div class="gather_nav">
			
		</div>
		<div class="top" @click="top">
			<img src="../../assets/img/businesses/top.png" />
		</div>
	</div>

</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		name: 'About',
		data() { //初始化变量，（数据）
			return {
				msg: 'Welcome to Your Vue.js App',
				idx: 1,
				navIndex:0,
				mySwiper:""
			}
		},
		computed: { //计算属性
			
			maxHight: function() {
				return(document.documentElement.clientHeight || document.body.clientHeight) - 56;
			},
			
		},
		mounted() { //页面加载完执行
			var _this=this
			this.mySwiper = new Swiper('.swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 0,
				mousewheelControl: true,
				watchSlidesProgress: true,
				onSlideChangeEnd: function(swiper){
			    	_this.navIndex=swiper.activeIndex
			  },
			  
			});
		},
		methods:{
			top() { 
			　　document.body.scrollTop = 0
				document.documentElement.scrollTop = 0;
				this.click(0)
			},
			click(i){
				this.mySwiper.slideTo(i, 1000, false);
				this.navIndex=i;
			}
		}

	}
</script>

<style scoped lang="less">
	@import 'guessing.less';
</style>