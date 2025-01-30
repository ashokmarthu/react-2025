import Task from "./components/Task";
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [openForm, setOpenForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskIndex, setTaskIndex] = useState(0);
  return (
    <div className="flex flex-row bg-slate-100 min-h-screen">
      <div className="basis-[25%] mt-7">
        <SideBar
          setOpenForm={setOpenForm}
          tasks={tasks}
          setTaskIndex={setTaskIndex}
        />
      </div>
      <div className="basis-[75%] mt-7">
        {openForm && <Form setTasks={setTasks} setOpenForm={setOpenForm} />}
        {taskIndex && <Task taskData={tasks[taskIndex]} />}
      </div>
    </div>
  );
}

export default App;
