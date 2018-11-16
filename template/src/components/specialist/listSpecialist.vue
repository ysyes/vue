<template>
	
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>专家管理</el-breadcrumb-item>
			  <el-breadcrumb-item>专家列表</el-breadcrumb-item>
			</el-breadcrumb>
			<el-button type="primary" style="float: right; margin: 14px;" :to="{ path:'/entering' }">录入专家</el-button>
		</div>
		<el-col :span="24" class="toolbar_top toolbar" style="padding-bottom: 0;">
			<el-form :inline="true">
					<el-form-item>
						<el-input placeholder="请输入专家姓名" v-model="form.list[0].nickname"></el-input>
					</el-form-item>
				<el-form-item label="专家类型：">
					<el-select v-model="form.list[0].userType" placeholder="请选择">
						<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="活动时间">
					<el-col :span="11" class="input">
						<el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="form.list[0].createTime"type="datetime" placeholder="起始时间"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2"> -</el-col>
					<el-col :span="11" class="input">
						<el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="form.list[0].updateTime"type="datetime" placeholder="截止时间"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-button class="button" type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!-- table-->
		<el-table highlight-current-row v-loading="listLoading" :data="dataList" style="width: 100%;">
			
			<el-table-column  prop="nickname" label="专家昵称" width="100%" >
			</el-table-column>
			<el-table-column label="专家头像" width="140">
		        <template slot-scope="scope">
		          <img :src="scope.row.logo" class="conheight"/>
		        </template>
		    </el-table-column>
			<el-table-column  prop="introduce" label="专家个人介绍" >
			</el-table-column>
			<el-table-column  prop="type" label="专家类型" >
			</el-table-column>
			<el-table-column  prop="planNum" label="总方案数量" >
			</el-table-column>
			<el-table-column  prop="notStartedNum" label="未开赛数量" >
			</el-table-column>
			<el-table-column prop="servenwinper" label="近7天胜率" >
			</el-table-column>
			<el-table-column  prop="tenwinper" label="近7天盈利率" >
			</el-table-column>
			<el-table-column label="操作" width="220">
		        <template slot-scope="scope">
		          <el-button size="small" type="primary" @click="$router.push('/specialist/recommend/'+scope.row.id)">全部推荐
		          </el-button>
		          <el-button size="small" type="danger" @click="handleDel(scope.row.id)">取消推荐</el-button>
		        </template>
		    </el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar">
		    <el-pagination style="display: inline-block" background layout="prev, pager, next" :total="total" :page-size="form.pageSize" pageNum @current-change="handleCurrentChange">
		    </el-pagination> 
		</el-col>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				options1: [{
					value: '1',
					label: '昵称'
				}, {
					value: '2',
					label: '手机号'
				}, {
					value: '3',
					label: '网点号'
				}],
				options2: [{
					value: '1',
					label: '特约专家'
				}, {
					value: '3',
					label: '同道专家'
				}],
				form:{
					pageSize: 10,
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
				listLoading: false,
				total: 10,
				sels: [],//列表选中列
				dataList:[]
				
			}
		},
		created() {
      		this.onSubmit()
    	},
		methods: {
			onSubmit(){
		        this.$http.post(this.api.spec.specList,this.form, res => {
		        	this.form.pageSize = res.result.pageSize
          			this.total = res.result.total
          			this.dataList=res.result.list
		        });
		    },
		    onQuery(){
		    	
		    },
		 	handleCurrentChange(val) {
		  		this.form.pageNum=val
		  		this.onSubmit()
		  	},
		}
	}
</script>

<style scoped lang="less">
	.toolbar{
		background: #F2F2F2;
		padding: 20px 0 20px 6px;
		text-align: center;
		button{
			float: left;
		}
	}
	.line{
		text-align: center;
	}
	.button{
		margin-left: 10px;
	}
	.conheight {
	    height: 60px;
	    overflow: auto;
	}
	.el-date-editor.el-input, .el-date-editor.el-input__inner{
		width: 190px;
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
	.toolbar_top{
		text-align: left;
	}
	
</style>