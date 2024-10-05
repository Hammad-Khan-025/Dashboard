import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, handleAddTask, handleDeleteTask }) => {
  return (
    <section className="mt-5">
      <h2 className="text-stone-700 font-bold">Tasks</h2>
      <NewTask handleAddTask={handleAddTask} />

      {tasks.length === 0 && (
        <p className="text-stone-400 mb-5 text-sm sm:text-base">This project has no tasks yet.</p>
      )}

      {tasks.length > 0 && (
        <ul className="bg-stone-200  rounded-md p-5 my-10">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between items-center  mt-2">
                <span className="w-96  text-stone-700 text-wrap ">{task.text}</span>
                <button className="hover:bg-red-200 text-red-500 px-2 py-1 rounded-md font-serif h-auto"
                onClick={()=> handleDeleteTask(task.id)}
                >Clear</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
