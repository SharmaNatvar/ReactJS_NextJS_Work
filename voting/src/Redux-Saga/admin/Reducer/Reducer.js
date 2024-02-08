import { DELETE_ELECTION_FULFILLED, DELETE_ELECTION_PENDING, DELETE_ELECTION_REJECTED, GET_ELECTION_FULFILLED, GET_ELECTION_PENDING, GET_ELECTION_REJECTED, POST_ELECTION_FULFILLED, POST_ELECTION_PENDING, POST_ELECTION_REJECTED, PUT_ELECTION_FULFILLED, PUT_ELECTION_PENDING, PUT_ELECTION_REJECTED } from "../Action/electionAction";
import { POST_LOGIN_FULFILLED, POST_LOGIN_PENDING, POST_LOGIN_REJECTED } from "../Action/loginAction";
import { DELETE_PARTY_FULFILLED, DELETE_PARTY_PENDING, DELETE_PARTY_REJECTED, GET_PARTY_FULFILLED, GET_PARTY_PENDING, GET_PARTY_REJECTED, POST_PARTY_FULFILLED, POST_PARTY_PENDING, POST_PARTY_REJECTED, PUT_PARTY_FULFILLED, PUT_PARTY_PENDING, PUT_PARTY_REJECTED } from "../Action/partyAction";
import { DELETE_USER_FULFILLED, DELETE_USER_PENDING, DELETE_USER_REJECTED, GET_USER_FULFILLED, GET_USER_PENDING, GET_USER_REJECTED, POST_USER_FULFILLED, POST_USER_PENDING, POST_USER_REJECTED, PUT_USER_FULFILLED, PUT_USER_PENDING, PUT_USER_REJECTED } from "../Action/userAction";


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





        // party-----------------------------------------
// party get data
        case GET_PARTY_PENDING:{
            return{
                ...state,
                isLoading :true,
                isError:null,
            }
        }

        case GET_PARTY_FULFILLED :{
            return{
                ...state,
                data: action.data,
                isLoading : false,
                isError : null
            }
        }

        case GET_PARTY_REJECTED : {
            return{
                ...state,
                isLoading : false,
                isError : action.data,
            }
        }

        // party post data case
        case POST_PARTY_PENDING:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case POST_PARTY_FULFILLED:{
            return{
                ...state,
                data: state.data.concat(action.data),
                isLoading:false,
                isError: null
            }
        }

        case POST_PARTY_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError : action.data
            }
        }


        // //update data cases
        case PUT_PARTY_PENDING:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case PUT_PARTY_FULFILLED:{
            return{
                ...state,
                data: state.data.map((state) => state.id === action.data.id ?action.data : state),
                isLoading: false,
                isError:null
            }
        }

        case PUT_PARTY_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError:action.data
            }
        }


        // // delete data case
        case DELETE_PARTY_PENDING:{
            return{
                ...state,
                isLoading: true,
                isError:null
            }
        }

        case DELETE_PARTY_FULFILLED:{
            return{
                ...state,
                data: state.data.filter((state)=> state.id !== action.data),
                isLoading: false,
                isError:null,
            }
        }
        case DELETE_PARTY_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError: action.data
            }
        }



        // Election -----------------------------------------
// Elction get data
        case GET_ELECTION_PENDING:{
            return{
                ...state,
                isLoading :true,
                isError:null,
            }
        }

        case GET_ELECTION_FULFILLED :{
            return{
                ...state,
                data: action.data,
                isLoading : false,
                isError : null
            }
        }

        case GET_ELECTION_REJECTED : {
            return{
                ...state,
                isLoading : false,
                isError : action.data,
            }
        }

        // party post data case
        case POST_ELECTION_PENDING:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case POST_ELECTION_FULFILLED:{
            return{
                ...state,
                data: state.data.concat(action.data),
                isLoading:false,
                isError: null
            }
        }

        case POST_ELECTION_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError : action.data
            }
        }


        // //update data cases
        case PUT_ELECTION_PENDING:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case PUT_ELECTION_FULFILLED:{
            return{
                ...state,
                data: state.data.map((state) => state.id === action.data.id ?action.data : state),
                isLoading: false,
                isError:null
            }
        }

        case PUT_ELECTION_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError:action.data
            }
        }


        // // delete data case
        case DELETE_ELECTION_PENDING:{
            return{
                ...state,
                isLoading: true,
                isError:null
            }
        }

        case DELETE_ELECTION_FULFILLED:{
            return{
                ...state,
                data: state.data.filter((state)=> state.id !== action.data),
                isLoading: false,
                isError:null,
            }
        }
        case DELETE_ELECTION_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError: action.data
            }
        }



        // User -----------------------------------------
// User get data
        case GET_USER_PENDING:{
            return{
                ...state,
                isLoading :true,
                isError:null,
            }
        }

        case GET_USER_FULFILLED :{
            return{
                ...state,
                data: action.data,
                isLoading : false,
                isError : null
            }
        }

        case GET_USER_REJECTED : {
            return{
                ...state,
                isLoading : false,
                isError : action.data,
            }
        }

        // party post data case
        case POST_USER_PENDING:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case POST_USER_FULFILLED:{
            return{
                ...state,
                data: state.data.concat(action.data),
                isLoading:false,
                isError: null
            }
        }

        case POST_USER_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError : action.data
            }
        }


        // //update data cases
        case PUT_USER_PENDING:{
            return{
                ...state,
                isLoading:true,
                isError:null
            }
        }

        case PUT_USER_FULFILLED:{
            return{
                ...state,
                data: state.data.map((state) => state.id === action.data.id ?action.data : state),
                isLoading: false,
                isError:null
            }
        }

        case PUT_USER_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError:action.data
            }
        }


        // // delete data case
        case DELETE_USER_PENDING:{
            return{
                ...state,
                isLoading: true,
                isError:null
            }
        }

        case DELETE_USER_FULFILLED:{
            return{
                ...state,
                data: state.data.filter((state)=> state.id !== action.data),
                isLoading: false,
                isError:null,
            }
        }
        case DELETE_USER_REJECTED:{
            return{
                ...state,
                isLoading:false,
                isError: action.data
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