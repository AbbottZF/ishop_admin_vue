import request from '@/utils/request'

export function getpage(page,name,parent_id){
    let data = {page:page};
    if(name){
        data.name = name
    }
    if(parent_id){
        data.parent_id = parent_id
    }
    return request({
        url:'/goods_type/getpage',
        method:'post',
        data:data
    })
}
export function getcolumn(parent_id){
    return request({
        url:'/goods_type/getcolumn',
        method:'post',
        data:{
            parent_id:parent_id
        }
    })
}
export function getlist(parent_id){
    return request({
        url:'/goods_type/getlist',
        method:'post',
        data:{
            parent_id:parent_id
        }
    })
}

export function create(name,parent_id,code,sort){
    return request({
        url:'/goods_type/getpage',
        method:'post',
        data:{
            name:name,
            parent_id:parent_id,
            code:code,
            sort:sort
        }
    })
}