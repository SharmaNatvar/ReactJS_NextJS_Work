import React, { useState } from 'react'

const UseObject = () => {

    const [formData , setFormData] = useState({
        name:'',
        age:'',
        nationality:''
    })

    function onChangeName(event) {
        setFormData((currntValue) =>{
            return {...currntValue, name : event.target.value}
        }
    )}

    function onChangeAge(event) {
        setFormData((currntValue) =>{
            return {...currntValue, age : event.target.value}
        }
    )}

    function onChangeNationality(event) {
        setFormData((currntValue) =>{
            return {...currntValue, nationality : event.target.value}
        }
    )}
    
    const onSubmit =(event) =>{
        event.preventDefault();
        if(formData.name != '' && formData.age != '' && formData.nationality != ''){
            alert(
                JSON.stringify(formData,null,4)
            )
        }
        else{
            alert('fill form')
        }
        setFormData({
            name:'',
            age:'',
            nationality:''
        })
    }

  return (
    <>
        <div className='container'>
            <h2>learn Use State with object</h2>
            <h4>MY profile</h4>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name : </label>
                    <input value={formData.name} type='text' onChange={onChangeName}/>
                </div>
                <div>
                    <label>Age : </label>
                    <input value={formData.age} type='number' onChange={onChangeAge}/>
                </div>
                <div>
                    <label>Nationality : </label>
                    <select value={formData.nationality} onChange={onChangeNationality}>
                        <option>select</option>
                        <option>india</option>
                        <option>us</option>
                        <option>china</option>
                        <option>nepal</option>
                        <option>japan</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default UseObject
