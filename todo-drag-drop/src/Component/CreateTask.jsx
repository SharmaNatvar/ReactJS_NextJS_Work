import React, { useState } from "react";
import { v4 } from "uuid";

const CreateTask = ({tasks , setTasks}) => {

  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  console.log(task);

  const handleSumbit = (e) =>{
    e.preventDefault()

    if (task.name.length < 3) return alert('enter more.....') 

    setTasks((prev) => {
      console.log(prev , 'prev');
      const list = [...prev , task]
      localStorage.setItem('tasks' , JSON.stringify(list));
      return list
    })
  }

  return (
    <>
      <h1>Create Table</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          className=" flex-1 border-2 border-black bg-transparent py-1.5 pl-1 m-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={task.name}
          onChange={(e) => setTask({ ...task, id: v4(), name: e.target.value })}
        />
        <button className="border-2 border-black p-2">sumbit</button>
      </form>
    </>
  );
};

export default CreateTask;
