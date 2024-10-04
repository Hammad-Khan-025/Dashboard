import React, { useRef } from 'react';
import Input from './Input'; // Assuming `Input` is a controlled component

const NewProject = ({ onAddProject, cancelProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Debugging: Log the inputs
    console.log({ enteredTitle, enteredDescription, enteredDueDate });

    // Simulate project submission if validation passes
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="py-10 w-full relative mt-14 sm:mt-0">
      <div className="flex flex-col items-center">
        <div className="w-full sm:w-[560px] px-3 sm:px-0">
          <Input label="Title" ref={titleRef} maxLength={20}/>
          <Input label="Description" ref={descriptionRef} textarea />
          <Input label="Due Date" type="date" ref={dueDateRef} />

          <div className="flex justify-end gap-4 py-4 font-semibold tracking-wider">
            <button
              className="hover:bg-red-600 text-red-600 hover:text-stone-50 active:bg-red-300 py-1 px-3 rounded-md transition-colors duration-300"
              onClick={cancelProject}
            >
              Cancel
            </button>
            <button
              className="bg-stone-700 py-1 px-3 text-stone-50 hover:bg-stone-950 active:bg-stone-500 rounded-md transition-colors duration-300"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
