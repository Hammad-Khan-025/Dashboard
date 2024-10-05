import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ handleStartAddProject }) => {
  return (
    <div className="sm:py-10 w-full flex flex-col items-center min-h-screen justify-center sm:justify-start gap-5 sm:pt-32 text-center px-2 sm:px-0">
      <img src={noProjectImage} alt="" className="w-16 h-16" />
      <h2 className="font-bold text-xl text-stone-500">No Project Selected</h2>
      <p className="text-stone-400">
        Select a project or get started with the new one
      </p>
      <Button onClick={handleStartAddProject}>Create new project</Button>
    </div>
  );
};

export default NoProjectSelected;
