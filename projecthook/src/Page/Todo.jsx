import React, { useState } from "react"
import { useRef } from "react";

const Todo = () => {

    const [text,setText]=useState([
        {
            id:1,
            title:'work',
            desc:'lorem and why what and tha ncj'
        },
        {
            id:2,
            title:'Nothing',
            desc:'lorem and why what and tha ncj'
        },
        {
            id:3,
            title:'work',
            desc:'lorem and why what and tha ncj'
        }
    ])

    // setText();


    const titleInput = useRef(null);
    const descInput = useRef(null);

const addTodo = (event)=>{
    event.preventDefault()
    const titleText = titleInput.current.value;
    const descText = descInput.current.value;
    
    ( titleText !== '' && descText !== '') ? setText([...text , {title:titleText, desc:descText}]) :alert('please enter text');

    titleInput.current.value = ''
    descInput.current.value = ''
}

    const deleteTodo = (id) => {
        let result = text.filter((event)=> event.id !== id);
        setText(result)
    }


// let arro = true
  return (
    <>
        <div className="todo_bg">
            <h1 className="text-center">ToDo List</h1>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" ref={titleInput}/>
                </div>
                <div className="form-group">
                    <label>Desction</label>
                    <input type="message" className="form-control" id="exampleInputDesc" ref={descInput}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={addTodo}>Submit</button>
            </form>
            {text.length===0?<h1>blank</h1>:text.map((event)=>{
                return(
                    <div className="todo_card" key={event.id}>
                        <h3>{event.title}</h3>
                        <p className="mb-0">{event.desc}</p>
                        <div>
                            <button className="btn btn-sm btn-secondary">Update</button>
                            <button className="btn btn-sm btn-danger" onClick={()=>deleteTodo(event.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Todo