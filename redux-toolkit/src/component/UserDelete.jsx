import React from 'react'
import { deleteUser } from '../redux-toolkit/slice/userSlice'
import { useDispatch } from 'react-redux'

const UserDelete = () => {
    const dispatch = useDispatch()

    const handleDeleteAll = () =>{
        const arr = []
        dispatch( deleteUser(arr))
    }

  return (
    <>
<button onClick={handleDeleteAll}>Delete All</button>
    </>
  )
}

export default UserDelete