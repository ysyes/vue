<template>
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>体彩在线</el-breadcrumb-item>
			  <el-breadcrumb-item  :to="{ path: '/online/list' }">体彩在线节目</el-breadcrumb-item>
			  <el-breadcrumb-item>编辑</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	<el-form ref="form" :model="form" label-width="120px" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="标题：">
			<el-input v-model="form.name"  placeholder="请输入活动标题"></el-input>
		</el-form-item>
		<el-form-item label="类型：">
			<el-select v-model="form.contentType" placeholder="请选择" >
				<el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
    <el-form-item label="上传封面图片：">
      <div class="imgBox">
        <img :src="imageOpen" />
        点击上传图片
                <input type="file" @change="changeImg" />
      </div>
    </el-form-item>
		<el-form-item label="日期：">
			<el-date-picker  value-format="yyyy-MM-dd HH:mm:ss" v-model="form.createTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
		</el-form-item>

		<el-form-item label="期次：">
			<el-input></el-input>
		</el-form-item>
    <el-form-item label="上传：">
      <input type="file">
    </el-form-item>
		<el-form-item label="URL：">
			<el-input v-model="form.videoUrl"  placeholder="请输入URL"  type="textarea" :autosize="{ minRows: 4, maxRows: 3}"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">确定</el-button>
			<el-button @click="$router.push('/online/list')">取消</el-button>
		</el-form-item>
	</el-form>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				form: {
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
		created() {
	     	this.onSubmit(this.id)
	     	this.form.id=this.id
	    },
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
