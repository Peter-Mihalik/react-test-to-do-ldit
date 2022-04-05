import { useState } from "react";
import NewTaskFrom from "./components/NewTaskFrom";
import TaskList from "./components/TaskList";

function App() {
  const [activeTasks, setActiveTasks] = useState([{title:'Go to cemetery', date:'6.4. 2022', status:false, id:1}])
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

        <TaskList tasks={activeTasks}>
          <h2>Active Tasks</h2>
        </TaskList>

        <TaskList tasks={completedTasks}>
          <h2>Completed Tasks</h2>
        </TaskList>
      </div>
    </div>
  );
}

export default App;
