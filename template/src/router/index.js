import Vue from 'vue'
import Router from 'vue-router'
/*登录页*/
import Login from '@/components/Login'
/*首页*/
import Home from '@/components/home'
/*用户*/
import User from '@/components/user/userList'
import UserAdd from '@/components/user/userAdd'
import UserEdit from '@/components/user/userEdit'
// import UserA from '@/components/user/User'
/*修改个人密码*/
import EditPass from '@/components/user/editPass'

import Test from '@/components/test/Test'
/*专家管理*/
import SpecialistList from '@/components/specialist/listSpecialist.vue'
import AllRecommend from '@/components/specialist/allRecommend'
import SpecialistAdd from '@/components/specialist/addSpecialist.vue'
import SchemeList from '@/components/specialist/listScheme.vue'
import SchemeDetail from '@/components/specialist/detailScheme.vue'
import SchemeAdd from '@/components/specialist/addScheme.vue'
import SchemeSet from '@/components/specialist/setScheme.vue'

/*订阅*/
import SubscriptionList from '@/components/subscription/list'
import SubscriptionAdd from '@/components/subscription/add'
import SubscriptionEdit from '@/components/subscription/edit'
/*体彩在线*/
import OnlineList from '@/components/online/list'
import OnlineAdd from '@/components/online/add'
import OnlineEdit from '@/components/online/edit'

/*购买知识内参*/
import BuyList from '@/components/buyLottery/buyList'
import BuyAdd from '@/components/buyLottery/buyAdd'
import BuyEdit from '@/components/buyLottery/buyEdit'
import SpeList from '@/components/specialistInfo/list'
import SpeAdd from '@/components/specialistInfo/add'
import SpeEdit from '@/components/specialistInfo/edit'


/*情报管理*/
import InforList from '@/components/information/list'
import InforAdd from '@/components/information/add'
import InforEdit from '@/components/information/edit'
import InforCheck from '@/components/information/check'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      hidden: true
    },
    {
      path: '/',
      name: '用户管理',
      component: Home,
      iconClass:'el-icon-ali-yonhu',
      children: [
        { path: '/user', component: User, name: '用户列表' },
        { path: '/user/edit/:id', component: UserEdit, name: '用户编辑',hidden:true},
        { path: '/user/add', component: UserAdd, name: '用户新增',hidden:true},
        { path: '/user/editpass', component: EditPass, name: '修改个人密码',hidden:true}
        // { path: '/user/aa', component: UserA, name: '1'}


      ]
    },
    {
      path: '/',
      name: '节目管理',
      iconClass:'el-icon-ali-dingyue',
      component: Home,
      children: [
        { path: '/subscription/list', component: SubscriptionList, name: '节目列表' },
        { path: '/subscription/add', component: SubscriptionAdd, name: '节目新增', hidden:true},
        { path: '/subscription/edit/:id', component: SubscriptionEdit, name: '编辑', hidden:true}
      ]
    },
     {
      path: '/',
      name: '专家管理',
      iconClass:'el-icon-ali-dingyue',
      component: Home,
      children: [
        { path: '/specialist/list', component: SpecialistList, name: '专家列表' },
        { path: '/specialist/recommend/:id', component: AllRecommend, name: '全部推荐' },
        { path: '/specialist/add', component: SpecialistAdd, name: '录入专家' },
        { path: '/specialist/scheme/list', component: SchemeList, name: '方案列表' },
        { path: '/specialist/scheme/detail', component: SchemeDetail, name: '方案详情' },
        { path: '/specialist/scheme/add', component: SchemeAdd, name: '录入方案' },
        { path: '/specialist/scheme/set', component: SchemeSet, name: '设置推荐项' },
      ]
    },
    {
      path: '/',
      name: '体彩在线',
      iconClass:'el-icon-ali-dingyue',
      component: Home,
      hidden:true,
      children: [
        { path: '/online/list', component: OnlineList, name: '体彩在线节目' },
        { path: '/online/add', component: OnlineAdd, name: '体彩在线新增',hidden:true},
        { path: '/online/edit', component: OnlineEdit, name: '体彩在线编辑',hidden:true}
      ]
    },
    {
      path: '/',
      name: '购彩知识内参',
      iconClass:'el-icon-ali-dingyue',
      component: Home,
      hidden:true,
      children: [
        { path: '/buy/list', component: BuyList, name: '内参在线节目' },
        { path: '/buy/add', component: BuyAdd, name: '内参在线节目新增',hidden:true },
        { path: '/buy/edit', component: BuyEdit, name: '内参在线节目编辑',hidden:true},
        { path: '/speinfo/list', component: SpeList, name: '专家信息列表'},
        { path: '/speinfo/add', component: SpeAdd, name: '专家信息添加',hidden:true},
        { path: '/speinfo/edit', component: SpeEdit, name: '专家信息编辑',hidden:true}
      ]
    },
    {
      path: '/',
      name: '情报管理',
      iconClass:'el-icon-ali-dingyue',
      component: Home,
      children: [
        { path: '/information/list', component: InforList, name: '情报列表' },
        { path: '/information/add', component: InforAdd, name: '情报添加'},
        { path: '/information/edit', component: InforEdit, name: '情报编辑'},
        { path: '/information/check', component: InforCheck, name: '情报查看'}
      ]
    }
  ]
})