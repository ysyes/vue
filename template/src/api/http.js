import axios from 'axios'
import router from '../router'
import {Loading, Message} from 'element-ui'

const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间
const API_ROOT = process.env.API_ROOT //接口的ip前缀
/*
 * @param response 返回数据列表
 */
function handleResults(response) {
  let remoteResponse = response.data
  var result = {}
  if (remoteResponse.resultcode == 1000) {
    result = remoteResponse
  } else if (remoteResponse.resultcode == 999) {
    //数据空
  } else if (remoteResponse.resultcode == 998 || remoteResponse.code == 280) {
    //未登录返回首页
    router.push({
      path: "/"
    })
  }
  return remoteResponse
}

/*
 * @param url 请求地址
 */
function handleUrl(url) {
  url = API_ROOT + url
  //API_ROOT是接口的ip前缀，比如http:192.168.1.1:8080/
  return url
}

/*
 * @param data 参数列表
 */
function handleParams(data) {
  return data
}

//请求接口loading
// http请求拦截器
let loadinginstace
axios.interceptors.request.use(config => {
  // element ui Loading方法
  /*loadinginstace = Loading.service({
    fullscreen: false,
    background: 'rgba(255,255,255,0)'
  })*/
  return config
}, error => {
  //loadinginstace.close()
  Message.error('加载超时')
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  //loadinginstace.close()
  return data
}, error => {
  //loadinginstace.close()
  Message.error(error.message)
  return Promise.reject(error)
})

export default {
  /*
     * get 请求
     * @param url
     * @param response 请求成功时的回调函数
     * @param exception 异常的回调函数
     */
  get(url, response, exception) {
    axios({
      method: 'get',
      url: handleUrl(url),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        //避免IE轮询缓存
        'Cache-Control': 'no-cache',
        'If-Modified-Since': '0'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  /*
  * post请求
  * @param url
  * @param data
  * @param response 请求成功时的回调函数
  * @param exception 异常的回调函数
  */
  post(url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },

  /*
  * put请求
  * @param url
  * @param data
  * @param response 请求成功时的回调函数
  * @param exception 异常的回调函数
  */
  put(url, data, response, exception) {
    axios({
      method: 'put',
      url: handleUrl(url),
      data: handleParams(data),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },


  /*
     * delete 请求
     * @param url
     * @param response 请求成功时的回调函数
     * @param exception 异常的回调函数
     */
  delete(url, response, exception) {
    axios({
      method: 'delete',
      url: handleUrl(url),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },


  /*
     * 导入文件
     * @param url
     * @param data
     * @param response 请求成功时的回调函数
     * @param exception 异常的回调函数
     */
  uploadFile(url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(
      (result) => {
        response(handleResults(result, data))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  /*
     * 下载文件用，导出 Excel 表格可以用这个方法
     * @param url
     * @param param
     * @param fileName 如果是导出 Excel 表格文件名后缀最好用.xls 而不是.xlsx，否则文件可能会因为格式错误导致无法打开
     * @param exception 异常的回调函数
     */
  downloadFile(url, data, fileName, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      responseType: 'blob'
    }).then(
      (result) => {
        const excelBlob = result.data
        if ('msSaveOrOpenBlob' in navigator) {
          // Microsoft Edge and Microsoft Internet Explorer 10-11
          window.navigator.msSaveOrOpenBlob(excelBlob, fileName)
        } else {
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          const blob = new Blob([excelBlob])
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          document.body.removeChild(elink)
        }
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  FormData(url, data, response, exception) {
    let formData = new FormData();
    for(let i in data){
      formData.append(i,data[i])
    }

    axios({
      method: 'post',
      url: handleUrl(url),
      data: formData,
      timeout: TIME_OUT_MS,
      headers: {

      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  }
}
