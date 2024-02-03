import { useEffect, useState } from "react";
import CreateTask from "./Component/CreateTask";
import ListTask from "./Component/ListTask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {

  const [tasks , setTasks] = useState([])

  useEffect(()=>{
setTasks(JSON.parse(localStorage.getItem('tasks')) || [])
  },[])

  console.log(tasks);
  return (
    <DndProvider backend={HTML5Backend}>
  <div className="flex flex-col items-center ">
  <CreateTask tasks={tasks} setTasks={setTasks}/>
  <ListTask tasks={tasks} setTasks={setTasks}/>
  </div>
    </DndProvider>
  );
}

export default App;
