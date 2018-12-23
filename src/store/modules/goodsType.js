import { getpage } from '@/api/goodsType'

const goodsType = {
    actions:{
        getPage(param){
            return new Promise((resolve, reject) => {
                getpage(param).then((response)=>{
                    resolve(response)                 
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
};

export default goodsType