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
