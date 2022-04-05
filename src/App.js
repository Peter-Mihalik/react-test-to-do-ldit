import { useState } from "react";
import NewTaskFrom from "./components/NewTaskFrom";

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

      </div>
    </div>
  );
}

export default App;
