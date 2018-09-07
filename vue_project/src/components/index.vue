<template>
	<div>
		<header>
			<div>
				<router-link class="checked" to="/">服务详情</router-link>
				<router-link to="case">案例</router-link>
				<router-link to="contact">联系我们</router-link>
			</div>
		</header>
		<nav>
			<span v-for="(data,idx) in datas" :key="idx" :class="{checked:idx==navIdx}" @click="navFn(idx)">{{data.title}}</span>
		</nav>
		<div id="box">
			<div class="main">
				<ul class="clearBoth" :class="'main'+navIdx">
					<li v-for="main in post.main">
						<h3>{{main.country}}</h3>
						<ul class="clearBoth">
							<router-link tag="li" v-for="city in main.citys" :to="'main?id='+navIdx+'-'+city.id" >
								<div class="imgbox">
									<div class="img" :style="{backgroundImage:'url('+city.image+')'}"></div>
									<span>{{city.recommend}}</span>
								</div>
								<p>{{city.city}}</p>
							</router-link>
						</ul>
					</li>
				</ul>
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
				datas:[],
				post:{}
			}
		},
		created:function () {
			let app = this;
			this.$axios.get('../static/json/index.json')
			.then(function (response) {
				app.datas = response.data;
				app.post = response.data[0];
			})
			
		},
		methods:{
			navFn:function (idx) {
				this.navIdx = idx;
				this.post = this.datas[idx];
			},
			mainFn:function (id) {
				window.location.href = 'main?id='+this.navIdx+'-'+id+'&';
			}
		}
	}
</script>
<style scoped>
	@import url("../assets/style/index.less");
</style>