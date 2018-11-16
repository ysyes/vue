
<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>修改个人密码</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
      <el-button type="primary" @click="$router.push('/user')">返回</el-button>
      </div>
    </div>
    <el-form class="box"  :rules="rules" ref="editForm" label-width="100px"   :model="editForm">
    <!--<el-form class="box"  :rules="rules" ref="editForm"  :label-position="labelPosition" label-width="100px" >-->

      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <el-form-item label="原密码：" prop="oldpassword" autocomplete="off">
              <el-input v-model="editForm.oldpassword" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="修改密码：" prop="password" autocomplete="off">
              <el-input v-model="editForm.password" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass" autocomplete="off">
              <el-input v-model="editForm.checkPass" type="password" ></el-input>
            </el-form-item>
            <el-button type="info" class="btn btn1"  @click="$router.push('/user')">取消</el-button>
            <el-button type="primary" class="btn" @click="Submit">确定</el-button>
          </div>
        </el-col>

      </el-row>

    </el-form>

  </section>

</template>
<script>
  export default {

    data()
    {
      var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
          if (this.editForm.checkPass !== '') {
            this.$refs.editForm.validateField('checkPass');
          }
          callback();
          }
      };
      var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else
            if (value !== this.editForm.password) {
          callback(new Error('两次输入密码不一致!'));
          console.log(value,this.editForm.password)
        } else {
          callback();
        }
      };
      return{
       
        editForm:{
        	oldpassword:'',
          password:'',
          checkPass:''
        },
        rules: {
          password: [
            {validator: this.RE.passWord2, trigger: 'blur'}
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur'}
          ]
        }
      }
    },
    computed:{
        upData(){
            return {
           		oldpassword:this.editForm.oldpassword,
              password:this.editForm.password
            }
        }
    },

    methods: {
      Submit(){
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$http.post(this.api.user.myEdit, this.upData, res => {
              if (res.code == 1000) {
                this.$router.push({path: '/user'});
                this.$message.success('修改成功');
                this.$router.push('/');
              } else {
                this.$message.error(res.msg)
              }
            })
          }else{
              return false;
          }
        })

      }


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
