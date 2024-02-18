export const addUserFun = (state , action) => {
    state.push(action.payload)
}


export const removeUserFun = (state , action)=> {
    state.splice(action.payload , 1)
}


export const deleteUserFun = (state , action) => {
    state.splice(0 ,state.length) 
}