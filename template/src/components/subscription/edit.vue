<template>
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>节目管理</el-breadcrumb-item>
			  <el-breadcrumb-item  :to="{ path: '/subscription/list' }">节目列表</el-breadcrumb-item>
			  <el-breadcrumb-item>节目编辑</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	<el-form ref="form" :model="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="标题：">
			<el-input v-model="form.name" value=""  placeholder="请输入活动标题"></el-input>
		</el-form-item>
		<el-form-item label="节目类型：">
			<el-select placeholder="请选择" v-model="form.bigType">
				<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="内容类型：">
			<el-select v-model="form.contentType" placeholder="请选择">
				<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="播放形式：">
			<el-select placeholder="请选择" v-model="form.isLive">
				<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="彩民类型：" v-if="form.bigType==2">
			<el-select placeholder="请选择" v-model="form.manType">
				<el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="音视频：">
			<el-select placeholder="请选择" v-model="form.type">
				<el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="状态：">
			<el-select placeholder="请选择" v-model="form.status">
				<el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="直播状态："  v-if="form.isLive==1">
			<el-select placeholder="请选择" v-model="form.liveStatus">
				<el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="本期专家：">
			<el-checkbox-group v-model="form.author" :data="dataList">
				<el-checkbox v-for="(data,index) in dataList" :label="data.id" :key="index">{{data.name}}</el-checkbox>				
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="上传封面图片：">
			<div class="imgBox">
				<img :src="imageOpen" />
				点击上传图片
				<input type="file" @change="changeImg" />
			</div>
		</el-form-item>
		<el-form-item label="日期：">
			<el-date-picker  value-format="yyyy-MM-dd HH:mm:ss" v-model="form.playTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
		</el-form-item>
		<el-form-item label="期次：">
			<el-input v-model="form.issue"  placeholder="请输入期次"></el-input>
		</el-form-item>
		<el-form-item label="URL：">
			<el-input v-model="form.videoUrl"  placeholder="请输入URL"></el-input>
		</el-form-item>
		<el-form-item label="内容：">
			<el-input type="textarea" :autosize="{ minRows: 14, maxRows: 8}" v-model="form.summary"  placeholder="请输入个人介绍"></el-input>
		</el-form-item>
		
		<el-form-item>
			<el-button type="primary"  @click="SubmitEdit">立即修改</el-button>
			<el-button @click.native.prevent  @click="$router.push('/subscription/list')">取消</el-button>
		</el-form-item>
	</el-form>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				list:{
					pageSize: 100,
					pageNum:1,
					list:[
							{
								createTime:null,//开始时间
								updateTime:null,//结束时间
								userType:null,//专家类型
								nickname:null,//专家昵称
							}
					]
				},
				form: {
					name: '',
					type: '',
					author: [],
					imageUrl: [],
					image:'',
					videoUrl:'',
					createTime: null,
					updateTime:null,
					summary:'',
					adminId:null,
					liveStatus:'',
					playTime:null,
					issue:'',
					shareUrl:null,
					bigType:'',
					isLive:'',
					recommend:null,
					contentType:'',
					manType:null,
					status:null
				},
				imageOpen: '',
				options1: [{
					value: 1,
					label: '体彩在线'
				}, {
					value: 2,
					label: '购彩知识内参'
				}],
				options2: [{
					value: 1,
					label: '竞彩足球'
				}, {
					value: 2,
					label: '竞彩篮球'
				}, {
					value: 3,
					label: '数字彩'
				}, {
					value: 4,
					label: '高频彩'
				}, {
					value: 5,
					label: '专家培训'
				}, {
					value: 6,
					label: '传统足彩'
				}],
				options3: [{
					value: 1,
					label: '直播'
				}, {
					value: 2,
					label: '录播'
				}],
				options4: [{
					value: 1,
					label: '初级彩民'
				}, {
					value: 2,
					label: '中级彩民'
				}, {
					value: 3,
					label: '高级彩民'
				}],
				options5: [{
					value: 1,
					label: '视频'
				}, {
					value: 2,
					label: '音频'
				}],
				options6: [{
					value: 1,
					label: '进行中'
				}, {
					value: 2,
					label: '已结束'
				}],
				options7: [{
					value: 0,
					label: '未开始'
				},{
					value: 1,
					label: '直播中'
				}, {
					value: 2,
					label: '直播结束'
				}],
				id:this.$route.params.id,
				dataList:[]
			}
		},
		created() {
			this.specialistList()
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
	            	this.form.status=res.result.status
	            	this.form.playTime=res.result.playTime
	            	this.form.issue=res.result.issue
	            	this.form.bigType=res.result.bigType
	            	this.form.isLive=res.result.isLive
	            	this.form.manType=res.result.manType,
	            	this.form.liveStatus=res.result.liveStatus
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
						this.$message.error(' ');
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
			},
			specialistList(){
		        this.$http.post(this.api.spec.specList,this.list, res => {
		        	this.dataList=res.result.list
		        });
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
