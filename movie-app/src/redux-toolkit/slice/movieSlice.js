import { createSlice } from "@reduxjs/toolkit";
import { getApiConfigFun, getGenresFunc } from "../reducerFunction/movieSliceFun";



export const movieSlice = createSlice({
    name:'movie',
    initialState:{
        url:{},
        genres:{}
    },
    reducers:{
        getApiConfig: getApiConfigFun,
        getGenres: getGenresFunc,
    }
})


export const {getApiConfig , getGenres} = movieSlice.actions
export default movieSlice.reducer