<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="name">
      <el-input type="text" v-model="ruleForm.name" placeholder="账号" @keyup.enter.native="Submit"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm.password" placeholder="密码" @keyup.enter.native="Submit"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button class="sub" type="primary" @click="Submit" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: true,
        logining: false
      }
    },
    methods: {
      Submit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.logining = true;
            this.$http.post(this.api.home.login,this.ruleForm,res => {
              this.logining = false;
              if(res.code==1000){
                //存入用户名、头像
                window.sessionStorage.setItem('user', JSON.stringify(res.result));
                this.$router.push({path: '/user'});
              }else{
                this.$message.error(res.msg)
              }

            });
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .ruleForm {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 420px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0 auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin-bottom: 35px;
    }
    .sub{
      width: 100%;
    }
  }
</style>
