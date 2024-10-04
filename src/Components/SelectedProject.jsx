import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({project, handleDeleteProject, handleAddTask, handleDeleteTask, tasks}) => {

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year:'numeric',
    month: 'short',
    day: 'numeric'
  })
  return (
    <section className="flex justify-center pt-24 sm:pt-20 tracking-wider">
      <div className="w-full sm:w-[560px] relative px-4 sm:px-0">
      <div className="">
        <h1 className="font-medium text-xl  text-stone-900 first-letter:capitalize">{project.title}</h1>
        <h2 className="text-stone-400 font-medium">{formattedDate}</h2>
        <p className="my-5 whitespace-pre-wrap break-all text-sm sm:text-base text-stone-700">{project.description}</p>
        <hr className="border-stone-400 rounded-full" />
      </div>
      <button className="absolute top-0 right-4 sm:right-0 text-red-500 hover:bg-red-200 px-3 py-1 rounded-md transition-all duration-300 font-medium"
      onClick={handleDeleteProject}
      >Delete</button>
      
      <Tasks handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} tasks={tasks} />
      </div>
    </section>
  );
};

export default SelectedProject;
