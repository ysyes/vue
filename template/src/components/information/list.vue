<template>

  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>情报管理</el-breadcrumb-item>
        <el-breadcrumb-item>情报列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
        <el-button type="primary" @click="$router.push('/information/add')">撰稿</el-button>
      </div>
    </div>

    <el-col :span="24" class="toolbar" style="padding-bottom: 0;">
      <el-form :inline="true">
        <el-form-item label="检索条件:">
          <el-select v-model="form.type" >
            <el-option label="已发布" value="1"></el-option>
            <el-option label="已撰稿" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型:">
          <el-select v-model="form.type" >
            <el-option label="全部" value="1"></el-option>
            <el-option label="五大联赛" value="2"></el-option>
            <el-option label="国际赛事" value="3"></el-option>
            <el-option label="其他赛事" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" size="small">查询</el-button>
      </el-form>
    </el-col>
    <!-- table-->
    <el-table highlight-current-row v-loading="listLoading" style="width: 100%;">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column type="index" label="图片">
      </el-table-column>
      <el-table-column  label="标题">
      </el-table-column>
      <el-table-column label="状态">
      </el-table-column>
      <el-table-column label="类型">
      </el-table-column>
      <el-table-column  label="发布时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small">撰稿</el-button>
          <el-button  type="danger" size="small">上传</el-button>
          <el-button  type="danger" size="small" @click="$router.push('/information/check')">查看</el-button>
          <el-button  type="danger" size="small" @click="$router.push('/information/edit')">编辑</el-button>
          <el-button  type="danger" size="small" >撤稿</el-button>
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
  export default {
    data() {
      return {
        form: {
          type:'',
          state:'',
          zd:''

        },
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
    padding: 20px 0 0 6px;
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
  button{
    vertical-align: middle;
  }
</style>
