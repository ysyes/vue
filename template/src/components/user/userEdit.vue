
<template>
  <section>
    <div class="mbx">
      <el-breadcrumb separator-class="el-icon-arrow-right">当前位置：</el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/user">用户列表</el-breadcrumb-item>
        <el-breadcrumb-item>编辑</el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float: right; ">
      <el-button type="primary" @click="$router.push('/user')">返回</el-button>
      </div>
    </div>
    <el-form class="box"  :rules="rules" ref="editForm" :label-position="labelPosition" label-width="100px"   :model="editForm">
    <!--<el-form class="box"  :rules="rules" ref="editForm"  :label-position="labelPosition" label-width="100px" >-->

      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <el-form-item label="ID：">
              <span>{{userId}}</span>
            </el-form-item>
            <el-form-item label="昵称："  prop="name">
              <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名：" prop="realname">
              <el-input v-model="editForm.realname"></el-input>
            </el-form-item>
            <el-form-item label="修改密码：" prop="password" autocomplete="off">
              <el-input v-model="editForm.password" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass" autocomplete="off">
              <el-input v-model="editForm.checkPass" type="password" ></el-input>
            </el-form-item>
            <el-form-item label="用户状态 ：" prop="status">
              <el-radio-group v-model="editForm.status">
              <el-radio label="1">激活</el-radio>
              <el-radio label="0">冻结</el-radio>
              </el-radio-group>
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
//        if (value === '') {
//          callback(new Error('请输入密码'));
//        } else {
          if (this.editForm.checkPass !== '') {
            this.$refs.editForm.validateField('checkPass');
          }
          callback();
//        }
      };
      var validatePass2 = (rule, value, callback) => {
//        if (value === '') {
//          callback(new Error('请再次输入密码'));
//        } else
            if (value !== this.editForm.password) {
          callback(new Error('两次输入密码不一致!'));
          console.log(value,this.editForm.password)
        } else {
          callback();
        }
      };
      return{
        labelPosition: 'right',
        userId:this.$route.params.id,
        editForm:{
            id:this.$route.params.id,
          name:'',
          realname:'',
          status:'',
          password:'',
          checkPass:''
        },
        rules: {
          name: [
            { validator: this.RE.user, trigger: 'blur'}
          ],
          password: [
            {validator: this.RE.passWord3, trigger: 'blur'}
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
              id:this.$route.params.id,
              name:this.editForm.name,
              realname:this.editForm.realname,
              status:this.editForm.status,
              password:this.editForm.password
            }
        }
    },

    created(){
      this.checkFn(this.userId)
    },
    methods: {
      checkFn(i){
        this.$http.get(this.api.user.userCheck(i)
          , res => {
            if (res.code == 1000) {
              this.editForm.name = res.result.name;
              this.editForm.realname = res.result.realname;
              this.editForm.status = res.result.status + "";
            }
          });
      },
      Submit(){
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$http.post(this.api.user.userEdit, this.upData, res => {
              if (res.code == 1000) {
                this.$router.push({path: '/user'});
                this.$message.success('编辑成功');
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
