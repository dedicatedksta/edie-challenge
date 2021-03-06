import React, { useState } from "react";
import {FaBars,FaTimes,FaChevronUp} from 'react-icons/fa'
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isShown,setIsShown]=useState(false)
  // console.log(isShown)
  return (
    <nav id="home" className={`${isShown? "h-screen ": "h-12 " } pt-8 transition-all ease-in-out delay-50 w-screen flex justify-between items-center  bg-white px-3 lg:px-8 xl:px-14`}>
      <div>
        <h1 className={`${isShown? "hidden ": "block " } md:static md:text-4xl absolute top-2 font-bold text-3xl text-[#333333]`}>Edie</h1> 
      </div>
      <ul className={`${isShown? "block": "hidden " } md:flex md:flex-row md:mx-0 md:pr-4 md:text-lg lg:text-xl md:gap-5 delay-50 flex flex-col mx-auto text-black text-2xl xl:text-2xl gap-1`} >
       <HashLink to="#home" smooth> <li className="cursor-pointer">Home</li> </HashLink>
       <HashLink to="#services" smooth><li className="cursor-pointer">Services</li></HashLink>
       <HashLink to="#designs" smooth><li className="cursor-pointer">Our Works</li></HashLink>
       <HashLink to="#clients" smooth><li className="cursor-pointer">Clients</li></HashLink>
       <HashLink to="#footer" smooth><li className="cursor-pointer">Contact</li></HashLink>
      </ul>
      {isShown?
      <button onClick={()=>{setIsShown(!isShown)}} className=" absolute cursor-pointer right-3 top-4 md:hidden text-xl">
        <FaTimes/>
      </button>
      
      :
      <button onClick={()=>{setIsShown(!isShown)}} className=" absolute cursor-pointer right-3 top-4 md:hidden text-xl">
        <FaBars/>
      </button>
      }
      
      <HashLink to="#home" smooth>
        <button className={`${isShown? "hidden": "block"} fixed bottom-4 right-4 md:right-8 xl:right-14 xl:bottom-6 text-white p-4 rounded-full bg-black bot`}>
          <FaChevronUp/>
        </button>
      </HashLink>

    </nav>
  )
};

export default Navbar;

