import AppInput from "@/components/AppInput";
import React from "react";

const AddTodo = () => {
  return (
    <div className="bg-white shadow-md p-3 w-[60%] m-auto rounded-lg">
      <p className="text-2xl/7 font-semibold mb-5">Add Todo</p>
      <AppInput label="Enter title" name="title" />
      <AppInput label="Enter Description" name="description" />
      <button
        className="bg-stone-700 shadow-sm text-white p-1 text-sm 
      rounded-md px-2 hover:bg-stone-800"
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
