import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-teal-800 text-white  p-5 md:flex md:px-10  justify-between items-center w-full md:fixed">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Healthcare</h1>
   
      <button className="md:hidden ml-auto" onClick={toggleMenu}>
        <Bars3Icon className="h-10 w-10" />
      </button>
      </div>
     
      <div
        className={`${
          isMenuOpen  ? "block" : "hidden"
        } overflow-hidden w-full md:flex md:items-center md:w-auto transition-max-height duration-500 ease-in-out  block `}
      >
        <ul className="flex flex-col md:flex-row md:gap-x-7 gap-y-3 mt-4 md:mt-0 cursor-pointer">
          <li className="link ">
            <Link to="/" >
              Dashboard
            </Link>
          </li>
        
          <li className="link">
            <Link to="/patientManagement" >
            Patient Management
            </Link>
          </li>
          <li className="link">
            <Link to="/appintmentMangement" >
            Appointment Management
            </Link>
          </li>
          <li className="link">
            <Link to="/patientPortal" >
            Patient Portal 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
