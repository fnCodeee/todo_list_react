import React, { useState } from "react";

const Modal = () => {
 const [isOpen, setIsOpen] = useState(false);

 const openModal = () => {
  setIsOpen(true);
 };

 const closeModal = () => {
  setIsOpen(false);
 };

 return (
  <div className="flex items-center justify-center min-h-screen bg-gray-200">

   {/* Modal Background */}
   {isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-300" onClick={closeModal}></div>
   )}

   {/* Modal */}
   <div
    className={`fixed inset-0 flex items-center justify-center transition-transform transform ${
     isOpen ? "scale-100" : "scale-0"
    }`}
   >
    <div className="bg-white rounded-lg shadow-lg sm:w-1/3">
     <div className="p-4 border-b">
      <h3 className="text-xl font-semibold">Modal Title</h3>
     </div>
     <div className="p-4">
      <p>Are you sure you want to proceed?</p>
     </div>
     <div className="p-4 border-t flex justify-end">
      <button
       onClick={closeModal}
       className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
      >
       Cancel
      </button>
      <button
       onClick={() => {
        closeModal();
       }}
       className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
      >
       OK
      </button>
     </div>
    </div>
   </div>

   <button
    onClick={openModal}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
   >
    Open Modal
   </button>
  </div>
 );
};

export default Modal;
