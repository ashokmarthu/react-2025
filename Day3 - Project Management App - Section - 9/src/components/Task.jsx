import React from "react";

const Task = ({ taskData }) => {
  const { title, createdAt, subTitle1, subTitle2, tasks } = taskData;
  return (
    <div className=" flex flex-col mt-10 p-10 gap-4">
      <div>
        <strong className="text-2xl">{title}</strong>
        <div className="text-sm">{createdAt}</div>
      </div>
      <div className="text-sm gap-y-5 flex-col flex">
        <p>{subTitle1}</p>
        <p>{subTitle2}</p>
      </div>
      <br />
      <div className="gap-4 flex flex-col">
        <strong>Tasks</strong>
        <div>
          <label
            for="add-task"
            className="gap-4 flex items-center justify-start"
          >
            <input
              type="text"
              id="add-task"
              className="w-50 h-8 border-none outline-none px-2 rounded-sm"
            />
            Add Task
          </label>
        </div>
        {tasks.length > 0 ? "" : "This Project deos not have any tasks yet"}
      </div>
    </div>
  );
};

export default Task;
