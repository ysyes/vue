<template>
  <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px" style="width:500px">
    <el-form-item label="用户名" prop="user">
      <el-input v-model.number="ruleForm.user"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button type="primary" @click="alertFn">打印</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          user: '',
          pass: '',
          phone: ''
        },
        rules2: {
          user: [
            { validator: this.RE.user, trigger: 'blur' }
          ],
          pass: [
            { validator: this.RE.passWord2, trigger: 'blur' }
          ],
          phone: [
            { validator: this.RE.phone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      alertFn(){
        let data = this.ruleForm2
        delete data.checkPass
        console.log(data);
        console.log(this.ruleForm2)
      }
    }
  }
</script>

<style scoped>

</style>
