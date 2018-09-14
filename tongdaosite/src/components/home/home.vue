<template>
	<div class="box">
		<div class="banner" :style="{height:maxHight+'px'}">
			<ul>
				<li v-for="i in bannerNum" :key="i" :class="{checked:idx==i}"></li>
			</ul>
			<div class="pin">
				<span v-for="i in bannerNum" :key="i" :class="{checked:idx==i}" @mouseenter="pinEnter(i)" @mouseleave="pinLeave"></span>
			</div>
		</div>
		<div class="cfa">
			<img src="../../assets/img/home/田径logo.png" />
			<img src="../../assets/img/home/足协logo.png" />
			<div>
				<h3>中国足球协会官方服务商</h3>
				<p>We built our tote with features tailored for our readers, like a com-fortable shoulder strap, an inside pocket to stow smaller itemsand a slightly-oversized design-so there's always room for thatextra pair of shoes</p>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				bannerNum:2,
				idx: 1,
				time: 0
			}
		},
		computed: {
			maxHight: function() {
				return(document.documentElement.clientHeight || document.body.clientHeight) - 56;
			}
		},
		mounted() {
			this.time = setInterval(this.timeFn, 4000)
		},
		methods: {
			timeFn() {
				if(this.idx == this.bannerNum) {
					this.idx = 1;
				} else {
					this.idx += 1;
				}
			},
			pinEnter(i) {
				this.idx = i;
				clearInterval(this.time)
			},
			pinLeave() {
				this.time = setInterval(this.timeFn, 4000)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import "./home.less";
</style>