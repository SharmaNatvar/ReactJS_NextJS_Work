import { PRODUCT_LIST } from "./constant"


export const userProductList = (data = [] , action ) =>{
    switch(action.type){
        case PRODUCT_LIST :
            console.log('product List', action)
            return [action.data]
        
        default:
            console.log('default')
            return data
    }
}