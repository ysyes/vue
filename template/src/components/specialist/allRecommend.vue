<template>
	
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>专家管理</el-breadcrumb-item>
			  <el-breadcrumb-item :to="{ path: '/specialist/list' }">专家列表</el-breadcrumb-item>
			  <el-breadcrumb-item>全部推荐</el-breadcrumb-item>
			</el-breadcrumb>
			<el-button type="primary" style="float: right; margin: 14px;">返回</el-button>
		</div>
		<el-col :span="24" class="toolbar_top toolbar" style="padding-bottom: 0;">
			<el-form :inline="true">
				<el-form-item label="活动时间">
					<el-col :span="11" class="input">
						<el-date-picker v-model="value1"type="datetime" placeholder="起始时间"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2"> -</el-col>
					<el-col :span="11" class="input">
						<el-date-picker v-model="value2"type="datetime" placeholder="截止时间"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-button class="button" type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!-- table-->
		<el-table highlight-current-row v-loading="listLoading" style="width: 100%;">
			
			<el-table-column label="推荐赛事" sortable>
			</el-table-column>
			<el-table-column  label="推荐理由" sortable>
			</el-table-column>
			<el-table-column label="过关方式" sortable>
			</el-table-column>
			<el-table-column label="投注场次" sortable>
			</el-table-column>
			<el-table-column label="玩法" sortable>
			</el-table-column>
			<el-table-column label="推荐内容" sortable>
			</el-table-column>
			<el-table-column label="方案状态" sortable>
			</el-table-column>
			<el-table-column label="中奖状态" sortable>
			</el-table-column>
			<el-table-column label="发布时间" sortable>
			</el-table-column>
			<el-table-column label="操作">
				<template solt-scope="scope">
					<el-button>方案详情</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-col :span="24" class="toolbar">
		    <el-pagination style="display: inline-block" background layout="prev, pager, next" :total="100">
		    </el-pagination>
		</el-col>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '1',
					label: '本月'
				}, {
					value: '2',
					label: '手机号'
				}, {
					value: '3',
					label: '网点号'
				}],
				value: '',
				value1:'',
				value2:'',
				listLoading: false,
			}
		},
		methods: {
			onSubmit() {
				//提交
			}
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
	.toolbar_top{
		text-align: left;
	}
	
	.line{
		text-align: center;
	}
	.button{
		margin-left: 10px;
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
</style>