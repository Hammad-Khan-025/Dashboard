import { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import NewProject from './Components/NewProject';
import NoProjectSelected from './Components/NoProjectSelected';
import SelectedProject from './Components/SelectedProject';
import DangerAlert from "./Components/DangerAlert";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  const [alert, setAlert] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar state

  // Display and hide sidebar
  const displaySidebar = () => setShowSidebar(true);
  const hideSidebar = () => setShowSidebar(false);

  const handleStartAddProject = () => {
    hideSidebar();
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    const { title, description, dueDate } = projectData;

    if (!title || !description || !dueDate) {
      setAlert(true);
      return;
    }else{
      toast.success("Project added successfully!", {
        position: 'top-center'
      });
    }

    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
    hideSidebar(); // Close sidebar when a project is selected (for mobile)
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: projectState.projects.filter(
        (prevState) => prevState.id !== projectState.selectedProjectId
      ),
    }));
  };

  const closeAlert = () => setAlert(false);

  const cancelProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddTask = (text) => {
    if (!text || projectState.selectedProjectId === undefined) {
      setAlert(true);
      return;
    }

    setProjectState((prevState) => {
      const newTask = { text, id: Math.random(), projectId: prevState.selectedProjectId };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: projectState.tasks.filter((task) => task.id !== id)
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // Filter tasks that belong only to the selected project
  const filteredTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      handleDeleteProject={handleDeleteProject}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      tasks={filteredTasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} cancelProject={cancelProject} />;
  }

  return (
    <main className="flex min-h-screen relative">
      {/* Button to show sidebar in mobile view */}
      <button
        className="fixed top-5 right-5 md:hidden bg-stone-600 p-2 rounded-md text-stone-200 cursor-pointer z-0"
        onClick={displaySidebar}
      >
        <FaBarsStaggered />
      </button>

      {/* Background overlay with opacity for mobile */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-stone-500 bg-opacity-50 z-10 md:hidden"
          onClick={hideSidebar}
        ></div>
      )}

      <div
        className={`fixed md:relative top-0 left-0 h-full z-20 md:z-0 bg-stone-900 md:w-1/4 w-3/4 transition-transform duration-300 min-h-screen rounded-r-3xl  ${
          showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Ensure the sidebar is flex and takes full height */}
        <Sidebar
          handleStartAddProject={handleStartAddProject}
          allProjects={projectState.projects}
          handleSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {/* Close button for mobile sidebar */}
        <button
          className="fixed top-4 right-4 text-stone-200 text-lg bg-stone-600 p-2 rounded-md md:hidden"
          onClick={hideSidebar}
        >
          <IoMdClose />
        </button>
      </div>

      {/* Main content takes the remaining space */}
      <div className="w-full">
        {content}

        {alert && (
          <div className="bg-black bg-opacity-80 min-h-screen w-full absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
            <div className="absolute">
              <DangerAlert closeAlert={closeAlert} />
            </div>
          </div>
        )}
        <ToastContainer/>
      </div>
    </main>
  );
}

export default App;
