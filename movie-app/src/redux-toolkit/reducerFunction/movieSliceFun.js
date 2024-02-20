

export const getApiConfigFun = (state , action) =>{
state.url = action.payload
}

export const getGenresFunc = (state , action) =>{
    state.genres = action.payload
}