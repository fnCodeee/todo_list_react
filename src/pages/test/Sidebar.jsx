import { BriefcaseIcon, HomeIcon, InformationCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const Sidebar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleSidebar = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div className="col-span-4">
   <button onClick={toggleSidebar} className="sm:hidden p-4 focus:outline-none">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
   </button>

   {/* SIdebar nya  */}
   <div
    className={`fixed inset-y-0 left-0 w-full sm:w-1/3 bg-gray-900 text-white transition-transform transform ${
     isOpen ? "-translate-x-14" : "-translate-x-full"
    } sm:translate-x-0`}
   >
    <div className="sm:p-12 pl-20">
     <h2 className="text-lg font-bold">Sidebar</h2>
     <nav>
      <ul>
       <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded-md">
        <HomeIcon className="w-5 h-5 mr-2" /> Home
       </li>
       <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded-md">
        <InformationCircleIcon className="w-5 h-5 mr-2" /> About
       </li>
       <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded-md">
        <BriefcaseIcon className="w-5 h-5 mr-2" /> Services
       </li>
       <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded-md">
        {/* <MailIcon className="w-5 h-5 mr-2" />  */}
        Contact
       </li>
      </ul>
     </nav>
    </div>
   </div>

   <div
    className={`fixed inset-0 bg-black opacity-0 transition-opacity ${
     isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
    } sm:hidden`}
    onClick={toggleSidebar}
   ></div>
  </div>
 );
};

export default Sidebar;
