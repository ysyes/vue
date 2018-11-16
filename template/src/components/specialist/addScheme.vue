<template>
	
	<section>
		<div class="mbx">
			<el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>专家管理</el-breadcrumb-item>
			  <el-breadcrumb-item>方案列表</el-breadcrumb-item>
			</el-breadcrumb>
			<el-button type="primary" style="float: right; margin: 14px;">录入方案</el-button>
		</div>
		<el-col class="toolbar_top toolbar" style="padding-bottom: 0;">
			<el-form :inline="true">
				<el-form-item label="开盘日期选择">
					<el-date-picker v-model="value1"type="datetime" placeholder="" style="width: 100%;"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button class="button" type="primary" >查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!-- table-->
		<el-table highlight-current-row v-loading="listLoading" style="width: 100%;">
			
			<el-table-column  label="赛事编号" width="100%" >
			</el-table-column>
			<el-table-column label="赛事" >
			</el-table-column>
			<el-table-column label="开赛时间" >
			</el-table-column>
			<el-table-column label="主队VS客队" >
			</el-table-column>
			<el-table-column label="让球" >
			</el-table-column>
			<el-table-column label="胜" >
			</el-table-column>
			<el-table-column label="平" >
			</el-table-column>
			<el-table-column label="负" >
			</el-table-column>
			<el-table-column label="操作">
				<template solt-scope="scope">
					<el-button></el-button>
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
					label: '昵称'
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
				total: 10,
				sels: [],//列表选中列
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