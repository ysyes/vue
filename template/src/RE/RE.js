 const USER = /^[a-zA-Z][\w-]{2,18}$/;/*用户名(只能包含数字、字母、下划线，长度在3~19之间)*/
const PASS_WORD1 = /^[a-zA-Z]\w{5,17}$/;/*密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)*/
const PASS_WORD2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;/*密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)*/
const PHONE = /^1\d{10}$/; /*手机号验证*/
const EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;/*邮箱*/
const ID_NUMBER = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;/*身份证号*/

export default {
  user(rule, value, callback){
    if(value===""){
      return callback(new Error('用户名不能为空'));
    }else if(!USER.test(value)){
      return callback(new Error('只能包含数字、字母、下划线，长度在3~19之间'))
    }else {
      callback();
    }
  },
  passWord1(rule, value, callback){
    if(value===""){
      return callback(new Error('密码不能为空'));
    }else
      if(!PASS_WORD1.test(value)){
      return callback(new Error('字母开头，长度在6~18之间，只能包含字母、数字和下划线'));
    }else {
      callback();
    }
  },
  passWord2(rule, value, callback){
    if(value===""){
      return callback(new Error('密码不能为空'));
    }else
      if(!PASS_WORD2.test(value)){
      return callback(new Error('必须包含大小写字母和数字的组合，长度在6-20之间'));
    }else {
      callback();
    }
  },
  passWord3(rule, value, callback){
    if(value!==""&&!PASS_WORD2.test(value)){
      return callback(new Error('必须包含大小写字母和数字的组合，长度在6-20之间'));
    }else {
      callback();
    }
  },
  phone(rule, value, callback){
    if(value===""){
      return callback(new Error('手机号不能为空'));
    }else if(!PHONE.test(value)){
      return callback(new Error('请输入正确手机号'));
    }else {
      callback();
    }
  },
  email(rule, value, callback){
    if(value===""){
      return callback(new Error('邮箱不能为空'));
    }else if(!EMAIL.test(value)){
      return callback(new Error('请输入正确邮箱'));
    }else {
      callback();
    }
  },
  idNumber(rule, value, callback){
    if(value===""){
      return callback(new Error('身份证不能为空'));
    }else if(!ID_NUMBER.test(value)){
      return callback(new Error('请输入正确身份证号'));
    }else {
      callback();
    }
  }
}
