import React,{useState} from "react";

let Hooks = () =>{
    

        // let number = 0
        const [number,setNumber] = useState(0)
        // function setNumber(){
        //   number+1
        // }
        // const [num,setNum] = useState(0)
        //  function setNum(){
        //   number-1
        // }

        console.log(number);

        const [value, setValue] = useState({})
        
        const handle = (e) => {
            setValue({...value,[e.target.name]:e.target.value})
        }

        console.log(value);
    
    
    return(
        <>
            <h1>this is app</h1>
            <h2>{number}</h2>
            <button className="button" onClick={()=> setNumber(number+1)}>increment</button>
            <button className="button" onClick={()=> setNumber(number-1)}>decriment</button>
            <button className="button" onClick={()=> setNumber(number-number)}>reset</button>
            <br/><br/><br/><br/>
            <input type="text" name="fName" placeholder="firstName" onChange={handle} class="join_input"></input><br/>
            <input type="text" name="lName" placeholder="LastName" onChange={handle} class="join_input"></input>
            <button type="submit" className="join_button button"> submit </button>
        </>
    )
}

export default Hooks