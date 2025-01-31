import Button from "./Button";

const SideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <hr className="border-gray-300 border-t-2 my-2" />
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasess =
            "w-full text-left px-2 py-1 rounded my-1 hover:bg-stone-800 truncate";
          if (project.id === selectedProjectId) {
            cssClasess += " bg-stone-800 text-stone-200";
          } else {
            cssClasess += " text-stone-400 ";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasess}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
