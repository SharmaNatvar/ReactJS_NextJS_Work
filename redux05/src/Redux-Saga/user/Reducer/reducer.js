import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_PROGRESS, PUT_PRODUCT_SUCCESS } from "../Action/action"



const initialState = {
    data : [],
    isLoading : false,
    isError : null
}

const userReducer = ( state = initialState , action) =>{
console.log(action,'userReducer action');
    switch(action.type){
        // get data case
        case GET_PRODUCT_PROGRESS:{
            return{
                ...state,
                isLoading :true,
                isError:null,
            }
        }

        case GET_PRODUCT_SUCCESS :{
            return{
                ...state,
                data: action.data,
                isLoading : false,
                isError : null
            }
        }

        case GET_PRODUCT_ERROR : {
            return{
                ...state,
                isLoading : false,
                isError : action.data,
            }
        }

        // post data case
        case POST_PRODUCT_PROGRESS:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case POST_PRODUCT_SUCCESS:{
            return{
                ...state,
                data: state.data.concat(action.data),
                isLoading:false,
                isError: null
            }
        }

        case POST_PRODUCT_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError : action.data
            }
        }


        //update data cases
        case PUT_PRODUCT_PROGRESS:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case PUT_PRODUCT_SUCCESS:{
            return{
                ...state,
                data: state.data.map((state) => state.id === action.data.id ?action.data : state),
                isLoading: false,
                isError:null
            }
        }

        case PUT_PRODUCT_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:action.data
            }
        }


        // delete data case
        case DELETE_PRODUCT_PROGRESS:{
            return{
                ...state,
                isLoading: true,
                isError:null
            }
        }

        case DELETE_PRODUCT_SUCCESS:{
            return{
                ...state,
                data: state.data.filter((state)=> state.id !== action.data),
                isLoading: false,
                isError:null,
            }
        }
        case DELETE_PRODUCT_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError: action.data
            }
        }


        //default data
        default:{
            return{
                ...state
            }
        } 
    }
}


export default userReducer