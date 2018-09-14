<template>
	<header>
		<div class="title1">
			<router-link class="logo" to="/"><img src="../../assets/img/home/logo.png" /></router-link>
			<ul @mouseleave="titleHover=''">
				<li :class="{checked:titleHover==1 || titleClick == 1}" @mouseenter="titleHover=1,mainHover=1">关于同道</li>
				<li :class="{checked:titleHover==2 || titleClick == 2}" @mouseenter="titleHover=2,mainHover=2">业务产品</li>
				<li :class="{checked:titleHover==3 || titleClick == 3}" @mouseenter="titleHover=3,mainHover=3">
					<router-link to="case">案例</router-link>
				</li>
				<li :class="{checked:titleHover==4 || titleClick == 4}" @mouseenter="titleHover=4,mainHover=4">
					<router-link to="live">赛事直播</router-link>
				</li>
			</ul>
		</div>
		<div class="title2" :class="{show:titleHover==1 || titleHover==2}" @mouseenter="titleHover=mainHover" @mouseleave="titleHover=''">
			<div>
				<div v-show="titleHover==1" @click="titleHover=''">
					<ul>
						<router-link tag="li" to="about">企业介绍</router-link>
						<router-link tag="li" to="news">新闻资讯</router-link>
						<router-link tag="li" to="partner">合作伙伴</router-link>
					</ul>
				</div>
				<div v-show="titleHover==2"  @click="titleHover=''">
					<ul>
						<router-link tag="li" to="sever">球队服务</router-link>
						<router-link tag="li" to="guessing">竞彩服务</router-link>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		data: function() {
			return {
				titleHover:"",
				mainHover:"",
				router:['','about','news','partner','sever','guessing','case','live']
			}
		},		
		computed: {
			titleClick:function(){
				let route = this.$route.path.split('/')[1];
				let idx = this.router.indexOf(route);
				if (idx <= 0) {
					return ''
				}else if(idx <= 3){
					return 1
				}else if(idx <= 5){
					return 2
				}else if(idx <= 6){
					return 3
				}else if(idx <= 7){
					return 4
				}else{
					return 5
				}
			},
			maxHight: function() {
				return(document.documentElement.clientHeight || document.body.clientHeight) - 56;
			}
		},
		methods: {
			hoverFn: function(name) {
				console.log(idx)
			}
		}
	}
</script>

<style scoped lang="less">
	@import "header.less";
</style>