<template>
	<div id="app">
		<Header></Header>
		<router-view :style="{minHeight:maxHight+'px'}"/>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "./components/header/header"
	import Footer from "./components/footer/footer"
	export default {
		name: 'App',
		data: function() {
			return {
				
			}
		},
		computed:{
			maxHight:function (){
				return (document.documentElement.clientHeight || document.body.clientHeight) - 56;
			}
		},
		components:{
			Header:Header,
			Footer:Footer
		}
	}
</script>

<style lang="less">
	@import './assets/css/common.css';
	html,body,#app{
	    width: 100%;
	    min-width: 1200px;
	    background: #000;
	}
	#app{
	    padding-top: 56px;
	}
</style>
