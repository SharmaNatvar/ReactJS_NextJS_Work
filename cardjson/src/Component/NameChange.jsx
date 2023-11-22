import React, { useState } from "react";

const NameChange = (props)=>{

    const [valueName, setValueName] = useState({})
    
    
    let changeName = (event) =>{
        let newName = {...valueName ,[event.target.name]:event.target.value} 
        setValueName(newName)
    }

    return(
        <>
            {/* <input type="number" /> */}
            <input type="text" placeholder="Enter your name" name='fname' onChange={changeName}></input>
            <input type="text" placeholder="Enter your name" name='lname' onChange={changeName}></input>
            <button type="button" onClick={()=>props.addBookEntry(valueName)}>Submit</button>

        </>
    )
}

export default NameChange