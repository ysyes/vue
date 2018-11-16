<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>情报管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/information/list">情报列表</el-breadcrumb-item>
        <el-breadcrumb-item>查看</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
        <el-button type="primary" @click="$router.push('/information/list')">返回</el-button>
      </div>
    </div>
    <el-form ref="form" :model="form" label-width="120px" style="margin:20px;">
      <el-form-item label="标题：">
        <el-input class="inp" v-model="form.name" value=""  placeholder="请输入活动标题" maxlength="20"></el-input><span>&nbsp;&nbsp;20</span>
      </el-form-item>
      <el-form-item label="上传封面图片：">
        <div class="imgBox">
          <img :src="img" />
          点击上传图片
          <input type="file" @change="changeImg" />
        </div>
      </el-form-item>
      <el-form-item label="类型：">
        <el-select v-model="form.contentType" placeholder="请选择类型" >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
      <editor-bar v-model="editor.info" :isClear="isClear" @change="change"></editor-bar>
      </el-form-item>
      <el-form-item>
       <!--<el-button @click.native.prevent  @click="$router.push('/information/list')">取消</el-button>-->
        <el-button type="primary" @click="$router.push('/information/list')">确定</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  import EditorBar from '@/components/EditorBar';
  export default {
    components: {EditorBar},
    data() {
      return {
        isClear: false,
        editor: {
          info: ''
        },
        form: {
          name: '',
          type: '',
          recommend: '',
          contentType: '',
          author: '',
          image: [],
          createTime: '',
          summary:''
        },
        options: [{
          value: 1,
          label: '五大联赛'
        }, {
          value: 2,
          label: '国际赛事'
        },{
          value: 3,
          label: '其它赛事'
        }],
        img:"./static/back.jpg"
      }
    },
    methods: {
      change (val) {
        this.editor.info1 = val
      },
      Submit() {	//提交
        console.log(this.form.createTime)
        this.$http.FormData(this.api.sub.subAdd,this.form,res => {

          if(res.code==1000){
            this.$message.success('添加成功');
            this.$router.push({path: '/subscription/list'});
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
.inp{
  width:600px;
}
.editor{
  margin:0;
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
  }

</style>
