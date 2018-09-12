<template>
	<div class="live" :style="{height:maxHight+'px'}">
		111
	</div>
</template>

<script>
	export default {
		name: 'Live',
		data() {
			return {
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
				if(this.idx == 4) {
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

<style scoped lang="less">
@import "live.less";
</style>