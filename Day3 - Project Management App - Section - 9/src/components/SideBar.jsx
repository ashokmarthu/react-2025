const SideBar = ({ setOpenForm, tasks, setTaskIndex }) => {
  return (
    <aside className="bg-black min-h-screen z-10 rounded-tr-md text-white flex flex-col justify-start p-4 gap-2">
      <div className="flex flex-col gap-6">
        <strong className="text-xl">YOUR PROJECTS</strong>
        <button
          className="bg-slate-500 w-fit p-2 rounded-md gap-2 flex"
          onClick={() => setOpenForm(true)}
        >
          <i>+</i>
          Add Project
        </button>
      </div>
      <hr class="border-gray-300 border-t-2 my-4" />
      <div>
        {tasks.length ? (
          <ul>
            {tasks.map((task, index) => (
              <li
                key={task.title}
                onClick={() => setTaskIndex(index )}
                className="text-md"
              >
                {task.title}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </aside>
  );
};

export default SideBar;
