
<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/user">用户列表</el-breadcrumb-item>
        <el-breadcrumb-item>添加</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
      <el-button type="primary"  @click="$router.push('/user')">返回</el-button>
      </div>
    </div>
    <el-form class="box"  :rules="rules" ref="addForm" :model="addForm" :label-position="labelPosition" label-width="100px" >
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <el-form-item label="昵称：" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名：" prop="realname">
              <el-input v-model="addForm.realname"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password" autocomplete="off">
              <el-input v-model="addForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass" autocomplete="off">
              <el-input v-model="addForm.checkPass" type="password"></el-input>
            </el-form-item>
            <el-button type="info" class="btn btn1"  @click="$router.push('/user')">取消</el-button>
            <el-button type="primary" class="btn" :loading="logining" @click="Submit">确定</el-button>
          </div>
        </el-col>

      </el-row>

    </el-form>

  </section>

</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.addForm.checkPass !== '') {
            this.$refs.addForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.addForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        labelPosition: 'right',
        logining: false,
        addForm:{
            name:'',
            realname:'',
            password:'',
            checkPass:''
        },
        rules: {
          name: [
            {required: true, validator: this.RE.user, trigger: 'blur'}
          ],
          realname: [
            {required: true, message: '请输入真实姓名', trigger: 'blur'}
          ],
          password: [
            {required: true,validator: this.RE.passWord2 , trigger: 'blur'}
          ],
          checkPass: [
            {required: true,validator: validatePass2, trigger: 'blur'}
          ]
        },


      }
    }, computed:{
      upData(){
        return {
          name:this.addForm.name,
          realname:this.addForm.realname,
          password:this.addForm.password
        }
      }
    },
    methods:{
        Submit(){
          this.$refs.addForm.validate((valid) => {
            if (valid) {
              this.$http.post(this.api.user.userAdd,this.upData,res => {
               if (res.code == 1000) {
                this.$router.push({path: '/user'});
                 this.$message.success('添加成功');
               }else{
                 this.$message.error(res.msg)
               }
              });
            }else{
              return false;
            }
          });
        },

    }
  }
</script>

<style scoped lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    margin-top:30px;
  }
  .btn{
    width:150px;
    margin-top:20px;
  }
  .btn1{
    margin-left:155px;
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
</style>
