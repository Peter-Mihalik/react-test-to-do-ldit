import { useState } from "react";
import NewTaskFrom from "./components/NewTaskFrom";
import Task from "./components/Task";

function App() {
  const [activeTasks, setActiveTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  function addTask(task) {
    setActiveTasks((prevTasks) => {
      setActiveTasks([...prevTasks, task])
    })
  }

  return (
    <div className="App">
      <NewTaskFrom addTask={addTask}></NewTaskFrom>
      <div className="taskContainers">
        <Task task={{title:'Go to cemetery', date:'6.4. 2022', status:false, id:1}}></Task>
      </div>
    </div>
  );
}

export default App;
