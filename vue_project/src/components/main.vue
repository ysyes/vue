<template>
	<div class="hello">
		<div class="return">
			<router-link to="/">{{name}}</router-link>
		</div>
		<header>
			<div>
				<router-link class="checked" to="/">服务详情</router-link>
				<router-link to="/case">案例</router-link>
				<router-link to="/contact">联系我们</router-link>
			</div>					
		</header>
		<nav>
			<div>
				<a v-for="(i,idx) in list" :class="{checked:idx==navIdx}" @click="navFn(idx)">{{i.title}}</a>
			</div>				
		</nav>
		<div id="box" @scroll="onScroll">
			<ul>
				<li v-for="(i,idx) in list" :id="idx" :class="{pk:i.id===8}">
					<div class="main" v-for="main in i.mains">
						<h3><span>{{i.title}}</span><img v-for="start in main.star" src="static/img/main/icon_star.png"/></h3>
						<p v-if="main.show instanceof Array" v-html="main.show[type]"></p>
						<p v-else v-html="main.show"></p>
						<div class="img clearBoth">
							<span v-for="img in main.imgs" :style="{backgroundImage:'url('+img+')'}"></span>
						</div>
					</div>
				</li>
			</ul>
			<div class="ad">
				<h1>“同道拉练 服务到家”</h1>
				<p>一流的硬件！一流的服务！一流的比赛对手！</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data:function () {
			return {
				navIdx:0,
				name:"",
				list:[],
				scrolltops:[],
				scrollOpen:true
			}
		},
		computed:{
			type:function () {
				return window.location.href.split("?")[1].split("&")[0].split("=")[1].split("-")[0];
			},
			id:function () {
				return window.location.href.split("?")[1].split("&")[0].split("=")[1].split("-")[1]
			}
		},
		created:function () {
			let app = this;
			this.$axios.get('static/json/main/'+this.id+'.json')
			.then(function (response) {
				document.title = response.data.name +'-冬训服务-北京同道伟业';
				app.name = response.data.name;
				app.list = response.data.list;
			})
		},
		methods:{
			/*点击滚动*/
			navFn:function (idx) {
				this.navIdx = idx;
				var top = document.getElementById(idx).offsetTop - 75;
				var scrollTop = document.getElementById("box").scrollTop;
				var set = Math.round((top - scrollTop)/20);
				if (top > scrollTop) {
					scrollDown();
				} else if(top < scrollTop){
					scrollUp();
				}
				//屏蔽滚动时间
				this.scrollOpen = false;
				/*下滚*/
				function scrollDown() {
					scrollTop += set;
					if (top > scrollTop) {					
						document.getElementById("box").scrollTop = scrollTop;
						setTimeout(scrollDown,10)
					} else{
						document.getElementById("box").scrollTop = top;
						setTimeout(function () {
							app.scrollOpen = true;
						},500)
					}
				}
				/*上滚*/
				function scrollUp() {
					scrollTop += set;
					if (top < scrollTop) {					
						document.getElementById("box").scrollTop = scrollTop;
						setTimeout(scrollUp,10)
					} else{
						document.getElementById("box").scrollTop = top;
						setTimeout(function () {
							app.scrollOpen = true;
						},500)
						
					}
				}
			},
			/*监听滚动条*/
			onScroll:function () {
				if (this.scrolltops.length === 0) {
					var lis = document.querySelectorAll("li");
					for (var i = 0;i < lis.length;i++) {
						this.scrolltops.push(lis[i].offsetTop - 200);
					}
					this.scrolltops.push(document.querySelectorAll(".ad")[0].offsetTop - 200);
				}else if(this.scrollOpen){
					var scrollTop = document.getElementById("box").scrollTop;
					console.log(scrollTop)
					for (var i in this.scrolltops) {
						if (this.scrolltops[i] > scrollTop) {
							this.navIdx = i - 1;
							console.log(i)
							break;
						}
					}
				}				
			}
		}
	}
</script>
<style scoped>
	@import url("../assets/style/main.less");
</style>