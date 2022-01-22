import axios from 'axios';
import message from '@/utils/message/showMessage'

// 创建axiso的实例
const ins = axios.create();

ins.interceptors.response.use(function (resp) {
  if(resp.data.code !== 0) {
    message({
      content: resp.data.msg,
      type: 'error',
      duration: 1500
    })
    return null
  }

  return resp.data.data
})

export default ins