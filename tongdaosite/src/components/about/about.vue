<template>
	<div id="about" class="swiper-container" :style="{height:maxHight+'px'}">
		<div class="swiper-wrapper">
			<div class="banner swiper-slide">
				<img src="../../assets/img/about/banner.png" class="img" />
				<div class="banner_about">
					<div class="banner_td">
						<div class="banner_td_left">
							<p>
								关于同道
							</p>
							<p>
								北京同道伟业是以足球大数据为依托，服务于职业俱乐部、足球经济、体育彩票为一体的体育科技公司。
							</p>
							<p>
								<span>愿景：成为世界一流足球大数据公司</span>
								<span>使命感：让中国足球心中有数</span>
								<span>价值观：成就客户</span>
							</p>
						</div>
						<div class="banner_td_right">
							<img src="../../assets/img/about/banner.png" />
							<div class="banner_td_play">
								<img src="../../assets/img/about/play.png" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="td_event swiper-slide">
				<div class="td_event_con">
					<p>同道大事记</p>
					<div class="div_lb">
					<ul :style="{marginLeft:num+'px'}">
						<li :class="{opacity:0==idx}">
							<img src="../../assets/img/about/data.png">
							<p>
								<span></span>
								<span></span>
							</p>
							<p>2017.12.21</p>
							<p>同道大数据APP正式上线</p>
						</li>
						<li :class="{opacity:1==idx}">
							<img src="../../assets/img/about/data.png">
							<p>
								<span></span>
								<span></span>
							</p>
							<p>2017.12.21</p>
							<p>同道大数据APP正式上线</p>
						</li>
						<li :class="{opacity:2==idx}">
							<img src="../../assets/img/about/data.png" />
						</li>
						
					</ul>
					<div class="btn_l"  @click="right" v-show="idx!=0">
						<img src="../../assets/img/about/gengduo.png">
					</div>
					<div class="btn_r"  @click="left" v-show="idx!=2">
						<img src="../../assets/img/about/gengduo.png">
					</div>
					</div>
				</div>
			</div>
			<div class="cfaFc swiper-slide">
				<div class="cfaFc_con">
					<p>同道FC</p>
					<span>
						That would be Bespoke Post which helps guys mix drinks, travel in style, deck out their padand even more. Notjust a box of high-quality gear each month, Bespoke Postalso offers usefuladvice to help you sharpen your life in all kinds of ways.
					</span>
				</div>
			</div>
			<div class="joinus swiper-slide">
				<div class="joinus_con">
					<div class="joinus_con_left">
						<img src="../../assets/img/about/CAPTAIN.png">
					</div>
					<div class="joinus_con_right">
						<p>同道同梦，共创伟业</p>
						<p>That would be Bespoke Post, which helps guys mix drinks, travel in styl</p>
						<p>CAPTAIN:朴星辰</p>
						<p>That would be Bespoke Post, which helps guys mix drinks, travel in styleleck out their pad and even more. Not usy,g ox of high-quality gear eachmonth, Bespoke Post also offers useful ad ce to help you sharpen your lifein all kinds of ways</p>
						<p>加入我们 JOIN US</p>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		name: 'About',
		data() {	//初始化变量，（数据）
			return {
				msg: 'Welcome to Your Vue.js App',
				idx:1
			}
		},
		computed:{ //计算属性
			num:function () {
				return 376-376 * this.idx
			},
			maxHight:function (){
				return (document.documentElement.clientHeight || document.body.clientHeight) - 56;
			}
		},
		mounted() {   //页面加载完执行
			  var mySwiper = new Swiper('.swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 0,
				mousewheelControl: true,
				watchSlidesProgress: true,
				pagination: '.swiper-pagination',
			});
		},
		methods:{ //事件及方法
			left(){
				this.idx++
				if (this.idx > 2) {
					this.idx = 2;
				}
			},
			right(){
				this.idx--
				if (this.idx < 0) {
					this.idx = 0;
				}
			}
		}
	}
	
	
</script>

<style scoped lang="less">
	@import 'about.less';
</style>