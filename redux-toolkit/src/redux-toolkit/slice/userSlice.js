import { createSlice } from "@reduxjs/toolkit";
import { addUserFun, deleteUserFun, removeUserFun } from "../reducerFunction/UserSliceFuc";



const userSlice = createSlice({
  name:'user',
  initialState:[],
  reducers:{
    addUser : addUserFun,
    removeUser : removeUserFun,
    deleteUser : deleteUserFun
  }
});

console.log(userSlice.actions);

export const {addUser , deleteUser , removeUser} = userSlice.actions
export default userSlice.reducer