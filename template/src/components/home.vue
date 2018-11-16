<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo logo-width">
        {{collapsed?'':'同道传媒后台管理'}}
      </el-col>
      <el-col :span="10">
        <div class="tools" @click="collapse">
          <i class="el-icon-menu"></i>
        </div>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover" @command="handleCommand">
          <span class="el-dropdown-link userinfo-inner"><img src="../assets/img/user_logo.png"/> {{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出登录</el-dropdown-item>
            <el-dropdown-item command="b">修改个人信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside class="menu-expanded">
        <!--导航菜单-->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="item.children.length>1">
              <template slot="title"><i :class="item.iconClass"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.children[0].path"><i :class="item.iconClass"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">


          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        sysUserName: '',
        sysUserAvatar: 'https://cn.vuejs.org/images/logo.png'
      }
    },
    methods: {
    	 //退出登录
      logoutFn() {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          this.$http.get(this.api.home.logout,res=>{
            if(res.code==527){
              window.sessionStorage.removeItem('user');
              this.$router.push('/');
            }else {
              this.$message.error(res.msg)
            }
          })

        }).catch(() => {

        });
      },
    	handleCommand(command) {
    		console.log(command)
       	if(command=="a"){
       		this.logoutFn()
       	}if(command=="b"){
       		this.$router.push('/user/editPass');
       	}
     },

      //折叠导航栏
      collapse() {
        //this.collapsed = !this.collapsed;
      }
    },
    mounted() {
      let user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.realname||'';
      }

    }
  }

</script>

<style scoped lang="less">
  @import "../assets/icon/iconfont.css";
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: #409EFF;
      color: #fff;
      .userinfo {
        height: 36px;
        margin-top: 12px;
        line-height: 36px;
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
          cursor: pointer;
          color: #fff;
          img {
            width: 36px;
            height: 36px;
            border-radius: 18px;
            margin-left: 10px;
            float: right;
          }
        }
      }
      .logo {
        height: 60px;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238, 241, 146, 0.3);
        border-right-width: 1px;
        border-right-style: solid;
        img {
          width: 40px;
          float: left;
          margin: 10px 10px 10px 18px;
        }
        .txt {
          color: #fff;
        }
      }
      .logo-width {
        width: 220px;
      }
      .tools {
        padding: 0px 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      aside {
        flex: 0 0 220px;
        width: 220px;
        .el-menu {
          height: 100%;
          background: #f2f2f2;
        }
        .collapsed {
          width: 60px;
          .item {
            position: relative;
          }
          .submenu {
            position: absolute;
            top: 0px;
            left: 60px;
            z-index: 99999;
            height: auto;
            display: none;
          }

        }
      }
      .menu-collapsed {
        flex: 0 0 60px;
        width: 60px;
      }
      .menu-expanded {
        flex: 0 0 220px;
        width: 220px;
      }
      .content-container {
        flex: 1;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {

          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
          min-width: 1000px;
        }
      }
    }
  }
</style>
