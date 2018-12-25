import { getpage,getcolumn,getlist} from '@/api/goodsType'

const goodsType = {
    actions:{
        getPage({ commit },data){
            let name = ''
            let parent_id = '';
            if(data.name){
                name = data.name.trim()
            }
            if(data.parent_id){
                parent_id = data.parent_id;
            }
            return new Promise((resolve, reject) => {
                getpage(data.page,name,parent_id).then((response)=>{
                    resolve(response)                 
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getColumn({ commit },param){
            return new Promise((resolve, reject) => {
                getcolumn(param.parent_id).then((response)=>{
                    resolve(response)                 
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getList({ commit },param){
            return new Promise((resolve, reject) => {
                getlist(param.parent_id).then((response)=>{
                    resolve(response)                 
                }).catch(error => {
                    reject(error)
                })
            })
        },
        createInfo({ commit },param){
            return new Promise((resolve, reject) => {
                getpage(param.name,param.parent_id,param.code,param.sort).then((response)=>{
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
};

export default goodsType