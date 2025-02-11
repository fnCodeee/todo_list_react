import React, { useState } from "react";
import { ModalConfirm } from "../Elements/ModalConfirm";

export const TodoItem = (props) => {
  const { task, handleDelete, toggleTaskEdit, onCompleted } = props;



  return (
   <div className="group w-full">
     <div
      className={`relative w-full mt-5 flex items-center justify-between p-4 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out
        group-hover:scale-105 hover:shadow-lg group-hover:rotate-1
      `}
     
    >
      {/* Checkbox & Text */}
      <div className="flex items-center gap-3 w-full" onClick={() => onCompleted(task.id, task.isCompleted)} >
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onCompleted(task.id, task.isCompleted)}
          className="w-6 h-6 accent-white/5 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110"
        />
        <span className={`text-lg font-semibold transition-all duration-200 ${task.isCompleted ? "line-through text-white/20" : "text-slate-300"}`}>
          {task.todoTask}
        </span>
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-end z-30">
        <button onClick={() => toggleTaskEdit(task.id, task.isEdited)} className="p-3 hover:opacity-80 transition-all duration-200 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white/50 hover:text-emerald-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button onClick={handleDelete} className="p-3 hover:opacity-80 transition-all duration-200 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white/50 hover:text-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        
      </div>
    </div>
   </div>
  );
};
