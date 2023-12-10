import React, {useRef , useState} from 'react'
import CurdCard from '../Component/CurdCard';
import axios from 'axios';


const Curd = () => {

    const [curdData, setCurdData] = useState([])


    const nameInput = useRef(null);
    const emailInput = useRef(null);

    const  postData = (e) =>{
        e.preventDefault()
        const userNameInput = nameInput.current.value
        const userEmailInput = emailInput.current.value
        const userId = curdData.length == 0 ?  1 : curdData[curdData['length']-1].id+1;
        // console.log(id,'id');

        if(userEmailInput !== '' && userNameInput !== ''){
            axios.post('https://65751b6fb2fbb8f6509ce42f.mockapi.io/crudUser',{
                id: userId,
                nameInput:userNameInput,
                emailInput:userEmailInput
            })
        }else{
            alert('enter input')
        }
    }


  return (
    <>
    <h1>Curd</h1>
     <form style={{width:'18rem', border:'2px solid black', padding:'1rem'}}>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" style={{width:'90%'}} ref={nameInput} />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" style={{width:'90%'}} ref={emailInput} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
     </form>

    <div className="d-flex flex-wrap">
        <CurdCard/>
    </div>
    </>
  )
}

export default Curd
