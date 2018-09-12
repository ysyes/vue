<template>
	<div id="app">
		<header>
			<div class="title1">
				<router-link class="logo" to="/"><img src="./assets/img/home/logo.png" /></router-link>
				<ul>
					<li :class="{checked:titleChecked=='main1'}" @mouseenter="titleChecked='main1'">关于同道</li>
					<li :class="{checked:titleChecked=='main2'}" @mouseenter="titleChecked='main2'">业务产品</li>
					<li :class="{checked:titleChecked=='main3'}" @mouseenter="titleChecked='main3'">案例</li>
					<li :class="{checked:titleChecked=='main4'}" @mouseenter="titleChecked='main4'">赛事直播</li>
					<li :class="{checked:titleChecked=='main5'}" @mouseenter="titleChecked='main5'">加入我们</li>
				</ul>
			</div>
			<div class="title2" @mouseleave="titleChecked=''">
				<div>
					<div v-show="titleChecked=='main1'">
						<ul>
							<router-link tag="li" to="about">企业介绍</router-link>
							<router-link tag="li" to="news">新闻资讯</router-link>
							<router-link tag="li" to="partner">合作伙伴</router-link>
						</ul>
					</div>
					<div v-show="titleChecked=='main2'">
						<ul>
							<router-link tag="li" to="">球队服务</router-link>
							<router-link tag="li" to="">竞猜服务</router-link>
							<router-link tag="li" to="">全国田径西浦</router-link>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<router-view :style="{minHeight:maxHight+'px'}" />
		<footer>
			<div class="footerTop">
				<div class="footerTL">
					<ul>
						<li>
							<h4>关于同道</h4>
							<span><router-link to="">企业介绍</router-link></span>
							<span><router-link to="">新闻资讯</router-link></span>
							<span><router-link to="">合作伙伴</router-link></span>
						</li>
						<li>
							<h4>业务产品</h4>
							<span><router-link to="">+球队服务</router-link></span>
							<span><router-link to="">采集技术</router-link></span>
							<span><router-link to="">同道大数据</router-link></span>
							<span><router-link to="">定制服务</router-link></span>
							<span><router-link to="">同道经纪</router-link></span>
							<span><router-link to="">同道球探</router-link></span>
							<span><router-link to="">+竞彩服务</router-link></span>
							<span><router-link to="">+全国田径信息系统</router-link></span>
						</li>
						<li>
							<h4>案例</h4>
							<span><router-link to="">能力彰显</router-link></span>
							<span><router-link to="">案例</router-link></span>
						</li>
						<li>
							<h4>赛事直播</h4>
						</li>
						<li>
							<h4>加入我们</h4>
						</li>
					</ul>
				</div>
				<div class="footerTR">
					<div>
						<ul>
							<li><span>同道新浪微博</span><img src="./assets/img/home/微博.png" /></li>
							<li><span>同道微信公众号</span></li>
							<li><img src="./assets/img/home/二维码.png" /></li>
						</ul>
						<ul>
							<li><img src="./assets/img/home/地址.png" /><span>北京市朝阳区大望京路科技商务园区宏泰东街浦项中心A座1805-1808室</span></li>
							<li><img src="./assets/img/home/电话.png" /><span>010-51078010</span></li>
							<li><img src="./assets/img/home/邮箱.png" /><span>tongdaoweiye@cfadata.cn</span></li>
						</ul>
					</div>						
					<ul>
						<li><img src="./assets/img/home/大数据.png"/></li>
						<li><img src="./assets/img/home/大数据图标.png"/><img src="./assets/img/home/大数据二维码.png"/></li>
						<li><img src="./assets/img/home/图标.png"/><img src="./assets/img/home/二维码.png"/></li>
					</ul>
				</div>
			</div>
			<div class="footerBottom">
				<p>京ICP备16009975号-1</p>
				<p>北京同道伟业体育科技有限公司.All Rights Reserved.</p>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data: function() {
			return {
				titleChecked: ""
			}
		},
		computed:{
			maxHight:function (){
				return (document.documentElement.clientHeight || document.body.clientHeight) - 56;
			}
		},
		methods: {
			hoverFn: function(name) {
				console.log("111")
				//this.titleChecked = name
			}
		}
	}
</script>

<style lang="less">
	@import './assets/css/common.css';
	@import './assets/css/header.less';
</style>
