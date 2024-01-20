import { GET_API_DATA_FULFILLED, GET_API_DATA_PENDING, GET_API_DATA_REJECTED } from "../Action/action"



const initialState = {
    data : [],
    isLoading : false,
    isError: null,
}


const adminReducer = ( state= initialState , action ) =>{
    switch(action.type){

        // get data
        case GET_API_DATA_PENDING:{
            return{
                ...state,
            isLoading:true,
            isError:null
            }
        }
        case GET_API_DATA_FULFILLED:{
            return{
                ...state,
                data:action.data,
            isLoading:false,
            isError:null
            }
        }
        case GET_API_DATA_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError:action.data,
            }
        }

        // defalut data
        default:{
            return{
                ...state
            }
        }
    }
}


export default adminReducer