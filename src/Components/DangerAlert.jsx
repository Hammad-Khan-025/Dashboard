import React from "react";
import { BiSolidError } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const DangerAlert = ({ closeAlert }) => {
  return (
    <div className="flex flex-col items-center gap-8 bg-white w-full sm:w-[500px] p-10 sm:p-16 rounded-xl tracking-wider relative shadow-lg shadow-red-950 ">
      <button
        className="text-xl  bg-red-200 p-2 text-red-600 rounded absolute top-5 right-5"
        onClick={closeAlert}
      >
        <IoMdClose />
      </button>
      <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 ">
        <BiSolidError  /> 
        <span>Oops...</span>
      </h2>
      <p className="text-sm sm:text-base font-medium text-red-500">Please fill out all the empty fields</p>
    </div>
  );
};

export default DangerAlert;
