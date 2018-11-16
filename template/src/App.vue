<template>
	<div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
	</div>
</template>

<script>
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
		}
	}
</script>

<style lang="less">
	@import './assets/css/common.css';
	html,body,#app{
	    width: 100%;
	    min-width: 1300px;
	}
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
