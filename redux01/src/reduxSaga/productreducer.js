import { SET_PRODUCT_LIST } from "./constant"


export const userProductList = (data = [] , action ) =>{
    switch(action.type){

            case SET_PRODUCT_LIST :
                console.log('set product List', action)
                return [...action.data]
        
        default:
            console.log('default')
            return data
    }
}