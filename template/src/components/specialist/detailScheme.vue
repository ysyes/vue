<template>
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item>专家管理</el-breadcrumb-item>
			  	<el-breadcrumb-item  :to="{ path: '/scheme/list' }">方案列表</el-breadcrumb-item>
			  	<el-breadcrumb-item>方案详情</el-breadcrumb-item>
			</el-breadcrumb>
			<el-button type="primary" style="float: right; margin: 14px;" >返回</el-button>
		</div>
		<el-form ref="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
			<el-form-item label="过关方式：">
				<div></div>
			</el-form-item>
			<el-form-item label="推荐玩法：">
				<div></div>
			</el-form-item>
			<el-form-item label="投注场次：">
				<div></div>
			</el-form-item>
			<el-form-item label="推荐内容：">
				<div></div>
				<div></div>
			</el-form-item>
			<el-form-item label="推荐理由：">
				<el-input type="textarea" :autosize="{ minRows: 6, maxRows: 8}"></el-input>
			</el-form-item>
			<el-form-item label="方案状态：">
				<div></div>
			</el-form-item>
			<el-form-item label="中奖状态：">
				<div></div>
			</el-form-item>
			<el-form-item label="发布时间：">
				<div></div>
			</el-form-item>
		</el-form>
	</section>
	
</template>

<script>
	export default {
		data() {
			return {
				textarea: '',

			}
		},
		methods: {
			
			onSubmit() {
				//提交
			},
		}
	}
</script>

<style scoped lang="less">

.row-bg {
    padding: 20px 0;
}
.mbx{
	height: 60px;
	line-height: 60px;
	padding-left: 10px;
	overflow: hidden;
	.el-breadcrumb{
		display: inline-block;
		height: 60px;
		line-height: 60px;
		float: left;
	}
}
</style>