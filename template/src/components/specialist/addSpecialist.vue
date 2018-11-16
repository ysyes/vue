<template>
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>专家管理</el-breadcrumb-item>
			  <el-breadcrumb-item  :to="{ path: '/specialist/list' }">专家列表</el-breadcrumb-item>
			  <el-breadcrumb-item>录入专家</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	<el-form ref="form" :model="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="专家昵称">
			<el-input v-model="form.name"  placeholder="请输入专家昵称"></el-input>
		</el-form-item>
		<el-form-item label="真是姓名">
			<el-input v-model="form.nickname"  placeholder="请输入专家真实姓名"></el-input>
		</el-form-item>
		<el-form-item label="上传图片：">
			<div class="imgBox">
				<img :src="img" />
				点击上传图片
				<input type="file" @change="changeImg" />
			</div>
		</el-form-item>
		<el-form-item label="个人介绍：">
			<el-input type="textarea" :autosize="{ minRows: 6, maxRows: 8}" v-model="form.introduce"  placeholder="请输入个人介绍"></el-input>
		</el-form-item>
		<el-form-item label="专家类型">
			<el-radio-group v-model="form.type">
				<el-radio label="1">特约专家</el-radio>
				<el-radio label="2">民间专家</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					nickname: '', //真实姓名
					image: '',
					type: "",
					introduce: ''
				},
				img:"./static/back.jpg"
			}
		},
		methods: {
			onSubmit() {   //提交
				this.$http.FormData(this.api.spec.specAdd,this.form, res => {
			        if(res.code==1000){
			        	this.$message.success('添加成功');
	            		this.$router.push({path: '/specialist/list'});
			        }else{
			        	this.$message.error('添加失败');
			        }
		        });
			},
			changeImg:function (event) {
				if(event.target.files && event.target.files[0]) {
					var file = event.target.files[0];
					if(!/image\/\w+/.test(file.type)){
					    this.$message.error('请选择图片类型');
					}else if (file.size > 1024 * 1024 * 2){
						this.$message.error('图片过大');
					}else{
						this.form.image=file;
						var reader = new FileReader();
						var _this=this
					    reader.onload = function(evt) {
					      	_this.img=evt.target.result
					    }
					    reader.readAsDataURL(file);
					}
			   }
			},
		}
	}

</script>
<style scoped lang="less">

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
	.imgBox{
		width: 120px;
		height: 100px;
		border: 1px dashed #ccc;
		overflow: hidden;
		position: relative;
		line-height: 100px;
		text-align: center;
		input{
			width: 120px;
			height: 100px;
			display: block;
			float: left;
			position: absolute;
			opacity: 0;
			top:0;
			left: 0;
		}
		img{
			width: 120px;
			height: 100px;
		}
	}

</style>
