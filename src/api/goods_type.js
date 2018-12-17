import request from '@/utils/request'

export function getpage(page){
    return request({
        url:'/goods_type/getpage',
        method:'post',
        data:{
            page:page
        }
    })
}

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
