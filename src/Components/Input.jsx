import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textarea,maxLength, ...props }, ref) => {
  return (
    <p className="flex flex-col gap-1 my-4 tracking-wider">
      <label className="text-sm font-bold">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}  // Forward the ref to the textarea
          className="p-3 h-40 w-full sm:w-auto rounded-md focus:outline-stone-500 bg-stone-200 border-stone-200"
          {...props}
        />
      ) : (
        <input
          ref={ref}  // Forward the ref to the input element
          type="text"
          maxLength={maxLength}
          className="p-3 w-full sm:w-auto rounded-md focus:outline-stone-500 bg-stone-200 border-stone-200"
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
