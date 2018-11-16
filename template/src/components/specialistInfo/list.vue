
<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>购彩知识内参</el-breadcrumb-item>
        <el-breadcrumb-item>专家信息列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
        <el-button type="primary"  @click="$router.push('/speinfo/add')">添加</el-button>
      </div>
    </div>
    <!--工具条-->
    <el-form :inline="true" :model="form"class="toolbar">
      <el-col :span="24"  style="padding-bottom: 0;">

        <el-form-item label="类型:">
          <el-select v-model="form.tj" placeholder="请选择检索条件">
            <el-option label="全部" value="name"></el-option>
            <el-option label="节目预告" value="realName"></el-option>
            <el-option label="本期视频" value="phone"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="音视频检索:">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="音频" value="all"></el-option>
            <el-option label="视频" value="realName"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上下架:">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="全部" value="all"></el-option>
            <el-option label="上架" value="all"></el-option>
            <el-option label="下架" value="realName"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24" style="padding-bottom: 0;">
        <el-form-item label="选择时间：">
          <el-date-picker
            v-model="form.startTime"
            type="datetime"
            placeholder="选择起始时间">
          </el-date-picker>
          <span>——</span>
          <el-date-picker
            v-model="form.endTime"
            type="datetime"
            placeholder="选择截止时间">
          </el-date-picker>
        </el-form-item>
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-form>


    <!--列表-->
    <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">

      <el-table-column type="index"  label="期数"></el-table-column>
      <el-table-column  prop="name" label="内容类型" >
      </el-table-column>
      <el-table-column prop="realName" label="专家昵称">
      </el-table-column>
      <el-table-column prop="web" label="专家图片">
      </el-table-column>
      <el-table-column prop="phone" label="专家介绍">
      </el-table-column>
      <el-table-column prop="type" label="本期节目简介">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="online">上架</el-button>
          <!--<el-button >下架</el-button>-->
          <el-button type="primary" @click="$router.push('/speinfo/edit')">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-col :span="24">
      <el-pagination style="text-align: center;background:#f2f2f2;padding:10px;margin: 10px 0px;" background layout="prev, pager, next" :total="100">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  export default {
    components: {ElFormItem}, data() {

      return {
        form: {
          keyword: '',
          tj: '',
          type: '',
          state: '1',
          startTime: '',
          endTime: ''
        },
        listLoading: false,
        users: [
          {
            id:1,
            name:"昵称",
            realName:"真实姓名",
            web:"123",
            phone:15148834879,
            type:"特约专家",
            state:"有效",
            time:'2018-10-23'

          }
        ]
      }
    },
    methods: {
        online(){
          this.$confirm('是否将该条信息上架', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '已上架'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        },
      //性别显示转换
      formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getUsers();
      },
      //获取用户列表
      getUsers() {
        let para = {
          page: this.page,
          name: this.filters.name
        };
        //this.listLoading = true;
        //NProgress.start();
        /*getUserListPage(para).then((res) => {
         this.total = res.data.total;
         this.users = res.data.users;
         this.listLoading = false;
         //NProgress.done();
         });*/
      },
      selsChange: function (sels) {
        this.sels = sels;
      },

    }

  }
</script>

<style scoped lang="less">

  .radio {
    margin-left: 8px;
  }

  .toolbar{
    background: #f2f2f2;
    padding: 10px;
    height:120px;
  }
  .mbx{
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
  button{
    vertical-align: middle;
  }
  radio{
    vertical-align: middle;

  }

</style>
