<template>
	<div class="box">
		<div class="title">
			<h3>合作伙伴</h3>
		</div>
		<div class="partner">
			<ul :style="{transform:'translateX('+movePx+'px)'}">
				<li>
					<div><img src="../../assets/img/about/partner/top_zuxie.png"/></div>
					<div><img src="../../assets/img/about/partner/top_tengxun.png"/></div>
					<div><img src="../../assets/img/about/partner/top_jingcaimao.png"/></div>
					<div><img src="../../assets/img/about/partner/top_shanggang.png"/></div>
					<div><img src="../../assets/img/about/partner/top_luneng.png"/></div>
					<div><img src="../../assets/img/about/partner/top_liaoningzuxie.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_01.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_02.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_03.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_04.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_05.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_06.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_07.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_08.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_09.png"/></div>
				</li>
				<li>
					<div><img src="../../assets/img/about/partner/zj_10.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_11.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_12.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_13.png"/></div>
					<div><img src="../../assets/img/about/partner/zj_16.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_01.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_02.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_03.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_04.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_05.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_06.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_07.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_08.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_09.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_10.png"/></div>
				</li>
				<li>
					<div><img src="../../assets/img/about/partner/zy_11.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_12.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_13.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_14.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_15.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_16.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_17.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_18.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_19.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_20.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_21.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_22.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_23.png"/></div>
					<div><img src="../../assets/img/about/partner/zy_24.png"/></div>
					<div><img src="../../assets/img/about/partner/top_kaermei.png"/></div>
				</li>
			</ul>
			<i class="left" @click="move(-1)" v-show="moveIdx!=0"></i>
			<i class="right" @click="move(1)" v-show="moveIdx!=2"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Partner',
		data() {
			return {
				moveIdx: 0
			}
		},
		computed:{
			movePx:function () {
				return -1000 * this.moveIdx
			}
		},
		methods: {
			move(type) {
				this.moveIdx = this.moveIdx + type;
			}
		}
	}
</script>

<style scoped lang="less">
	@import "./partner.less";
</style>