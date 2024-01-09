import {
  GET_API_DATA_FULFILLED,
  GET_API_DATA_PENDING,
  GET_API_DATA_REJECTED,
} from "../action/action";

const initialState = {
  data: [],
  isLoading: false,
  isError: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action, "from userReducer");

  switch (action.type) {
    case GET_API_DATA_PENDING: {
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    }
    case GET_API_DATA_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        data: action.data,
        isError: null,
      };
    }
    case GET_API_DATA_REJECTED: {
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};


export default userReducer;