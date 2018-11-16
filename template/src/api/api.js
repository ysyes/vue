export default {
    sub:{
    	subList:'/manager/sub/list/', 
    	subAdd:"/manager/sub/add",
    	subDetail(id){return '/manager/sub/select/'+id},
    	subEdit:"/manager/sub/update",
    	subDel(id){return '/manager/sub/delete/'+id},
    },
    pwd: {
        sendEmail: '/manage/user/sendEmail',
        resetPwd: '/manage/user/passwordReset'
    },
  	home: {
    	login: '/manager/admin/login',
    	logout: '/manager/admin/logout'
 	},
 	user:{
 		userAdd:'/manager/admin/add',
	 	userList(num){return '/manager/admin/list/'+num},
	  	userCheck(id){return '/manager/admin/queryOne/'+id},
	  	userEdit:'/manager/admin/update',
	  	myEdit:'/manager/admin/updatepwd'
 	},
 	spec:{
 		specList:"/manager/specialist/list",
 		specAdd:"/manager/specialist/add"
 	}
	  
}
