<template>
	<div>
		<header>
			<div>
				<router-link to="/">服务详情</router-link>
				<router-link to="/case">案例</router-link>
				<router-link class="checked" to="/contact">联系我们</router-link>
			</div>				
		</header>
		<div id="box">
			<div class="header">
				<ul class="clearBoth">
					<li><img src="../assets/img/contact/icon_person@2x.png"/></li>
					<li><h3>同道伟业体育经纪公司</h3><p>联系信息如下</p></li>
				</ul>
			</div>
			<ul class="way clearBoth">
				<li>
					<p>地址:</p>
					<span>北京市朝阳区望京东园四区13号浦项中心A座18层05-08</span>
				</li>
				<li>
					<p>电话:</p>
					<span>公司座机：010-51077220、手机号：15210824148</span>
				</li>
				<li>
					<p>邮箱:</p>
					<span>发送邮件至  gaohan@cfadata.cn</span>
				</li>
				<li>
					<p>微信:</p>
					<span>同道伟业经纪公司-高涵：g378181035</span>
				</li>
				<li>
					<p>微博:</p>
					<a href="###"><span>同道伟业足球经纪</span></a>					
				</li>
			</ul>
			<div class="message clearBoth">
				<h1>咨询及反馈</h1>
				<div class="title clearBoth" :class="{focue:focus}">
					<span>主题：</span>
					<input type="text" v-model.trim="themename" @focus="focus=true" @blur="focus=false" ref="themeFocus" value=""/>
				</div>
				<textarea v-model.trim="content" ref="contentFocus" placeholder="请在此处写下您想要咨询的问题或者反馈的意见；并留下您的联系方式，我们将尽快与您联系!"></textarea>
				<ul class="addimgs clearBoth">
					<li class="show" v-for="(img,index) in imgs" :key="img" :style="{backgroundImage:'url('+img+')'}">
						<div class="del" title="删除" @click="del(index)">×</div>
					</li>
					<li class="add" v-if="imgs.length<5">
						<p>插入图片(2M以内)</p>
						<input @change="change" type="file" accept="image/jpeg,image/png">
					</li>
				</ul>
				<button :class="{checked:checked}" @click="sub">发送</button>
			</div>
			<div id="alertBox" :class="{show:alert}">{{msg}}</div>
			<div id="loading" v-if="loading">
				<img src="../assets/img/loading-0.gif"/>				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data:function () {
			return {
				themename:"",
				content:"",
				focus:false,
				imgs:[],
				multipart:[],
				alert:false,
				msg:"",
				loading:false
			}
		},
		computed:{
			checked:function () {
				if (this.themename !== "" && this.content !== "") {
					return true;
				} else{
					return false;
				}
			}
		},
		methods:{
			change:function (event) {
				if(event.target.files && event.target.files[0]) {
					var file = event.target.files[0];
					if(!/image\/\w+/.test(file.type)){
					    this.show('请选择图片类型');
					}else if (file.size > 1024 * 1024 * 2){
						this.show('图片过大,请选择2M以下');
					}else{
						this.multipart.push(file);
						var reader = new FileReader();
					    reader.onload = function(evt) {
					        app.imgs.push(evt.target.result);
					    }
					    reader.readAsDataURL(file);
					}
			   }
			},
			del:function (index) {
				this.imgs.splice(index,1);
				this.multipart.splice(index,1);
			},
			sub:function () {
				if (this.themename==="") {
					this.$refs.themeFocus.focus();
				} else if(this.content===""){
					this.$refs.contentFocus.focus();
				}else{
					var formData = new FormData();
					formData.append("themename",this.themename);
					formData.append("content",this.content);
					for (var i in this.multipart) {
						formData.append("multipart",this.multipart[i]);
					}
					//loading
					this.loading = true;
					let app = this;
					this.$axios.post('../contact/club/message',formData)
					.then(function (response) {
						app.loading = false;
					    //清空内容
					    if(response.data.resultcode == 1000){
					    	app.themename = "";
						    app.content = "";
						    app.imgs = [];
						    app.multipart = [];
					    }
					    app.show(response.data.msg);
					}).catch(function (error) {
						app.loading = false;
					    app.show(error.message);
					})
				}
			},
			show:function (msg) {
				this.msg = msg;
				this.alert = true;
				let app = this;
				setTimeout(function () {
					app.alert = false;
				},3000)
			}
		}
	}
</script>
<style scoped>
	@import url("../assets/style/contact.less");
</style>