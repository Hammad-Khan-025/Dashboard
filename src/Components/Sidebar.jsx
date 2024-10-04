import React from "react";
import Button from "./Button";

const Sidebar = ({ handleStartAddProject, allProjects, handleSelectProject, selectedProjectId }) => {
  return (
    <aside className="flex bg-stone-900  rounded-r-3xl  flex-col items-center gap-5 px-5 sm:px-0 py-16 sm:py-10 tracking-wider ">
      <div>
      <h1 className="text-stone-200 text-xl font-bold uppercase mb-8">
        Your Projects
      </h1>
      <Button onClick={handleStartAddProject}>Add Projects</Button>

      <ul className="mt-10 sm:mt-14 text-sm sm:text-base">
        {allProjects.map((items)=>{
          return (
            <li key={items.id} className="">
              <button className={`text-stone-400 hover:text-stone-200 w-full mb-3 capitalize hover:bg-stone-700 active:bg-stone-500 px-5 py-1 sm:py-2 rounded-md transition-all duration-300  text-left text-wrap first-letter:capitalize ${items.id === selectedProjectId? 'bg-stone-700 shadow shadow-stone-200': ''}`}
              onClick={()=> handleSelectProject(items.id)}
              >
              {items.title}
              </button>
            </li>
          )
        })}
      </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

