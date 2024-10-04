import React, { useState } from 'react'

const NewTask = ({handleAddTask}) => {

  const [tasks, setTasks] = useState('')

  const handleTasks = (e) => {
    setTasks(e.target.value)
  }

  const handleClick = () => {
    handleAddTask(tasks)
    setTasks('');
  }
  
  return (
    <div className='flex items-center gap-5 my-5'>
      <input type="text" className='bg-stone-200 focus:outline-stone-500 rounded-md px-2 py-2 sm:py-1 text-sm sm:text-base' placeholder='Add tasks here' onChange={handleTasks} value={tasks} />
      <button className='bg-stone-700 text-stone-200 active:bg-stone-500 rounded-md px-3 py-2 sm:py-1 text-sm sm:text-base' onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask
