<template>
	<div class="gather_outer swiper-container" :style="{height:maxHight+'px'}">
		<div class="swiper-wrapper">
			<div class="gather swiper-slide">
				<div class="gather_left">
					<img src="../../assets/img/tameSever/gathersh.png" />
				</div>
				<div class="gather_right">
					<p>足球数据赛后采集</p>
					<p>Data acquisition system for soccer game</p>
					<p>
						<span>专业数据：</span>
						<span>★ 场均采集2000+基础事件，7000+技术细分数据</span>
						<span>★ 数据维度大分类达到40多种</span>
						<span>★ 每一个事件都可查看对应球员、位置、时间及对应画面</span>
					</p>
					<p>
						<span>先进技术：</span>
						<span>★ 使用MVVM架构技术</span>
						<span>★ 成熟的OO编程和AOP编程模型</span>
						<span>★ 高性能的B-Tree索引设计</span>
						<span>★ 保证系统在各种环境稳定运行</span>
					</p>
				</div>
			</div>
			<div class="gather swiper-slide">
				<div class="gather_left">
					<img src="../../assets/img/tameSever/gatherzr.png" />
				</div>
				<div class="gather_right_zhineng">
					<p>智能穿戴采集</p>
					<p>Data acquisition system for soccer game</p>
					<p>
						对团队和运动员所有的训练数据进行现场调控和后期数据分析，助队伍和教练来优化训练和训练恢复控制，安全训练，避免运动过度和训练不足。
					</p>
					<p>
						具有强大分析和服务功能的网络云端。
					</p>
					<p>
						心率传感器，GPS，加速度计，陀螺仪，速度传感器，位移传感器采集各项基础数据
					</p>

				</div>
			</div>
			<div class="gather swiper-slide">
				<div class="gather_left">
					<img src="../../assets/img/tameSever/gatherss.png" />
				</div>
				<div class="gather_right_ss">
					<p>足球数据实时采集</p>
					<p>Data acquisition system for soccer game</p>
					<p>
						★ 实时采集比赛数据，跟赛后数据维度一致 
					</p>
					<p>
						★ 通过云服务器，实时传送数据并统计，    生成丰富的球队、球员可视化数据
					</p>

				</div>
			</div>
			<div class="gather swiper-slide">
				<div class="gather_left">
					<img src="../../assets/img/tameSever/gather.png" />
				</div>
				<div class="gather_right">
					<p>足球数据采集技术</p>
					<p>Data acquisition system for soccer game</p>
					<p>
						
						<span>★ 实时、赛后、质检一体化，单机联网灵活切换</span>
						<span>★实时采集无缝连接，比赛同时采集并提供事件及统计分析数据</span>
						<span>★ 灵活的阵型变换录入，不仅记录事件，还可以记录场上阵型的变化</span>
					
						<span>★ 赛后每场比赛采集2000+事件</span>
						<span>★ 自动化管理功能，可精确监控到每一个事件的录入</span>
					</p>
				</div>
			</div>
			<div class="gather swiper-slide">
				<div class="gather_left">
					<img src="../../assets/img/tameSever/gathertr.png" />
				</div>
				<div class="gather_right_tn">
					<p>足球数据体能采集</p>
					<p>Data acquisition system for soccer game</p>
					<p>
						使用多目标自动检测、识别、跟踪、记录每名球员的
						实时位置，精确计算场上球员每一帧的移动为球员的
						体能状况提供精准科学的能力评估。
					</p>
				</div>
			</div>
			<div class="gather swiper-slide">
				<div class="gather_left">
					<img src="../../assets/img/tameSever/gathersh.png" />
				</div>
				<div class="gather_right">
					<p>智慧球场</p>
					<p>Data acquisition system for soccer game</p>
					<p>
						无需手动操作摄像机，无需摄像师，没有布线和处理视频文件的烦恼。
						让体育视频录制和分析变得简单。
						360度全景无卡顿拉拽，同时间轴视角转换
						Catapult, GP Sports, Polar, VX Sports均可匹配，并可根据用户需求匹配其他品牌可穿戴设备
					</p>
					<p>
						<span>★ 视频录制</span>
						<span>比赛和训练、虚拟全景、多角度、固定摄像机位</span>
						<span>★ 数据&统计</span>
						<span>打标签、回复和评论、GPS和可穿戴设备运动数据、图像追踪</span>
						<span>★ 运动表现分析</span>
						<span>平移、拉拽、缩放，虚拟全景、多视角 、战术视角、运动数据 & 位置</span>
						<span>★ 分享和协作</span>
						<span>服务教练&队员实时分享或赛后分享 、可视化展示分享剪辑的视频、基于视频的手绘战术图</span>
					</p>
				</div>
			</div>
		</div>
		<div class="gather_nav">
			<ul>球队服务
				<li>采集技术</li>
				<li>同道大数据</li>
				<li>定制服务</li>
				<li>同道经济</li>
				<li>同道球探</li>
				<li>同道体育</li>
			</ul>
		</div>
		<div class="top" @click="top">
			<img src="../../assets/img/tameSever/top.png" />
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
				idx: 1
			}
		},
		computed: { //计算属性

			maxHight: function() {
				return(document.documentElement.clientHeight || document.body.clientHeight) - 56;
			}
		},
		mounted() { //页面加载完执行
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 0,
				mousewheelControl: true,
				watchSlidesProgress: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				}
			});
			window.addEventListener('scroll', this.scrollToTop)
		},
		methods:{
			top() { 
			　　document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}
		}

	}
</script>

<style scoped lang="less">
	@import 'tameSever.less';
</style>