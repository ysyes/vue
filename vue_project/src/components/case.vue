<template>
	<div>
		<header>
			<div>
				<router-link to="/">服务详情</router-link>
				<router-link class="checked" to="/case">案例</router-link>
				<router-link to="/contact">联系我们</router-link>
			</div>
		</header>
		<div id="box">
			<ul>
				<li v-for="data in post">
					<h3>【{{data.country}} • {{data.city}}】</h3>
					<div class="main">
						<p>{{data.team}}</p>
						<p>日期：{{data.time}}</p>
					</div>
					<div class="img clearBoth">
						<span v-for="img in data.imgs" :style="{backgroundImage:'url('+img+')'}"></span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data:function () {
			return {
				post:[]
			}
		},
		created:function () {
			let app = this;
			this.$axios.get('static/json/case.json')
			.then(function (response) {
				app.post = response.data;
			})
			
		}
	}
</script>
<style scoped>
	@import url("../assets/style/case.less");
</style>