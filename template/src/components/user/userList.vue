<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
        <el-button type="primary"  @click="$router.push('/user/add')">添加新用户</el-button>
      </div>
    </div>
    <!--列表-->
    <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">

      <el-table-column type="id"  prop="id" label="ID"></el-table-column>
      <el-table-column  prop="name" label="用户昵称">
      </el-table-column>
      <el-table-column prop="realname" label="真实姓名">
      </el-table-column>
      <el-table-column prop="props" label="用户状态" :formatter="formatStatus">
      </el-table-column>

      <el-table-column prop="createtime" label="注册时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button to="/user/edit" @click="$router.push('/user/edit/'+scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-col :span="24">
      <el-pagination style="text-align: center;background:#f2f2f2;padding:10px;margin: 10px 0px;" background layout="prev, pager, next" :total="total"   :page-size="pageSize"  @current-change="handleCurrentChange">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        listLoading: false,
        total:0,
        pageSize:0,
        users:[],
        status:'冻结'
      }
    },
    created() {
      this.userList(1)
    },
    methods: {
      selsChange: function (sels) {
        this.sels = sels;
      },
      userList(i){
        this.$http.get(this.api.user.userList(i)
          , res => {
            if (res.code == 1000) {
              this.users=res.result.list;
              this.total=res.result.total;
              this.pageSize=res.result.pageSize;
            } else {

            }
          });
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.userList(val)
      },
      formatStatus: function (row, column) {
        return row.status == 1 ? '激活' : row.status == 0 ? '冻结' : '未知';
      }
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
    height:90px;
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
