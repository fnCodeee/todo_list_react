import React, { useEffect, useRef, useState } from "react";

export const FormEdit = (props) => {
  const {className, handleEdit, task, toggleEdit, fieldName} = props;
  const [value, setValue] = useState({
    [fieldName]: task[fieldName]
  });
  
  const handleSubmit = (e) =>  {
    e.preventDefault();
    handleEdit(task.id, value)
    toggleEdit(task.id, task.isEdited)
  }

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
   }


   const inputRef = useRef(null)
   useEffect(() => {
    // Fokus ke input saat komponen FormEdit muncul
    inputRef.current?.focus();
  }, []); 

 return (
  <form className={`${className} py-5`} onSubmit={handleSubmit}>
   <div className="mt-5 shadow-md w-full rounded-xl flex justify-between">
    <input
     className="w-full rounded-xl p-2 focus:outline-none bg-white/5"
     type="text"
     placeholder=""
     value={value[fieldName]}
     name={fieldName}
     onChange={handleChange}
     ref={inputRef}
    />
   
   </div>
   <div className="flex mt-5 justify-end w-full gap-3">
     <button className="py-2 px-4 rounded-full bg-green-600 flex" type="submit">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="size-6"
      >
       <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      Update
     </button>

     <button onClick={() => toggleEdit(task.id, true)} className="p-2  rounded-full bg-slate-500">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="size-6 text-white"
      >
       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
     </button>
    </div>
  </form>
 );
};
