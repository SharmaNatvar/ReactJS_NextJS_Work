import { POST_LOGIN_FULFILLED, POST_LOGIN_PENDING, POST_LOGIN_REJECTED } from "../Action/loginAction";


const initialState = {
    data :[],
    isLoading : false,
    isError : null
}


const adminReducer = (state = initialState , action) =>{
    console.log(action ,'userReducer action');

    switch (action.type) {
        case POST_LOGIN_PENDING:{
            return{
                ...state,
                isLoading : true,
                isError : null,
            }
        }

        case POST_LOGIN_FULFILLED:{
            return{
                ...state,
                data:action.data,
                isLoading : false,
                isError : null,
            }
        }

        case POST_LOGIN_REJECTED:{
            return{
                ...state,
                isLoading : false,
                isError : action.data,
            }
        }
        
        default:{
            return{
                ...state
            }
        }

    }
}

export default adminReducer