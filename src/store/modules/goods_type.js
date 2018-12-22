import {getpage} from '@api/goods_type'

const goods_type = {
    actions:{
        getpage(param){
            return new Promise((resolve, reject) => {
                getpage(param).then((response)=>{
                    if(response.code === 1){
                        resolve(response.data)
                    }else{
                        resolve(false)
                    }                    
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
};

export default goods_type