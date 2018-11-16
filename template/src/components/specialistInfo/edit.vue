<template>
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>购彩知识内参</el-breadcrumb-item>
			  <el-breadcrumb-item  :to="{ path: '/speinfo/list' }">专家信息列表</el-breadcrumb-item>
			  <el-breadcrumb-item>编辑</el-breadcrumb-item>
			</el-breadcrumb>
      <div style="float: right; ">
        <el-button type="primary"  @click="$router.push('/speinfo/list')">返回</el-button>
      </div>
		</div>
    <el-form ref="form" :model="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
      <el-form-item label="期数：">
        <el-input v-model="form.name" value=""  placeholder="请输入活动标题"></el-input>
      </el-form-item>
      <el-form-item label="内容类型：">
        <el-select v-model="form.contentType" placeholder="请选择类型">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专家昵称：">
        <el-input v-model="form.name" value=""  placeholder="请输入专家昵称"></el-input>
      </el-form-item>
      <el-form-item label="上传专家图片：">
        <div class="imgBox">
          <img :src="img" />
          点击上传图片
          <input type="file" @change="changeImg" />
        </div>
      </el-form-item>
      <el-form-item label="专家介绍">
        <el-input calss="text" v-model="form.desc"    type="textarea" :autosize="{ minRows: 4, maxRows: 3}"></el-input>
      </el-form-item>
      <el-form-item label="本期节目简介">
        <el-input calss="text" v-model="form.desc"  placeholder=""  type="textarea" :autosize="{ minRows: 4, maxRows: 3}"></el-input>

      </el-form-item>
      <el-form-item>
        <el-button @click.native.prevent  @click="$router.push('/speinfo/list')">取消</el-button>
        <el-button type="primary" >确定</el-button>
      </el-form-item>
    </el-form>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				form: {
          desc:'',
					id:'',
					name: '',
					type: '',
					contentType: '',
					author: '',
					imageUrl: '',
					image: '',
					videoUrl:'',
					createTime: '',
					summary:'',
					status:''
				},
				img:'',
				imageOpen: '',
				options: [{
					value: 1,
					label: '本期视频'
				}, {
					value: 2,
					label: '节目预告'
				}],
				id:this.$route.params.id,
			}
		},
//		created() {
//	     	this.onSubmit(this.id)
//	     	this.form.id=this.id
//	    },
		methods: {
			onSubmit(i) { //信息回填
	            this.$http.get(this.api.sub.subDetail(i),res => {
	            	this.form.name=res.result.name
	            	this.form.type=res.result.type
	            	this.form.contentType=res.result.contentType
	            	this.form.createTime=res.result.createTime
	            	this.form.imageUrl=res.result.imageUrl
	            	this.imageOpen=res.result.imageUrl
	            	this.form.summary=res.result.summary
	            	this.form.videoUrl=res.result.videoUrl
	            	this.form.author=res.result.author
	            	this.form.status=res.result.status+""

	            });
			},
			SubmitEdit() {	//提交
	            this.$http.FormData(this.api.sub.subEdit,this.form,res => {
	            	if(res.code==1000){
	            		this.$message.success('修改成功');
	            		this.$router.push({path: '/subscription/list'});
	            	}else{
	            		this.$message.error('修改失败');
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
						this.form.imageUrl="";
						var reader = new FileReader();
						var _this=this
					    reader.onload = function(evt) {
					      	_this.imageOpen=evt.target.result
					    }
					    reader.readAsDataURL(file);
					}
			   }
			}
		}
	}

</script>
<style scoped lang="less">
  .el-textarea__inner{
    height:300px;
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
    .text{
      height:500px;
    }

	}

</style>
