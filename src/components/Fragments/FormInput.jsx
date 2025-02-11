import React, { useState } from "react";

export const FormInput = (props) => {
 const { label, funcInput, className, placeholder } = props;
 const [value, setValue] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  funcInput(value);
  setValue("");
 };
 return (
  <form className={`${className}`} onSubmit={handleSubmit}>
   <label className="text-md md:text-xl">{label}</label>
   <div className="mt-5 shadow-md w-full rounded-xl flex justify-between">
    <input
     className="w-full rounded-l-xl px-4 bg-white/5 focus:outline-none"
     type="text"
     placeholder={placeholder}
     value={value}
     onChange={(e) => setValue(e.target.value)}
    />
    <button className="p-3 w-1/4 h-full text-white text-center bg-blue-600 rounded-r-xl">Submit</button>
   </div>
  </form>
 );
 
};
