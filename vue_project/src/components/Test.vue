<template>
	<div>
		<router-link to="/">首页</router-link>
		<ul>
			<h1>{{msg}}</h1>
			<li v-for="i in list">{{i}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'test',
		data() {
			return {
				msg: 'cehsi',
				list:["a","b","c","d"]
			}
		}
	}
</script>

<style scoped>
	li{
		border-bottom: 1px solid rgba(0,0,0,0.5);
	}
</style>