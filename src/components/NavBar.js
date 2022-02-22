import React,{useEffect} from 'react';
import Facebook from './Icons/Facebook';
import Tiktok from './Icons/Tiktok';
import Twitter from './Icons/Twitter';
import Instagram from './Icons/Instagram';
import {Link} from "react-router-dom"
import {MenuIcon} from "@heroicons/react/solid" 
import Logo from "../asset/Logo/logo.png"

export default function NavBar({Menu}) {
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      const {scrollTop} = document.documentElement;
      
       if(scrollTop > 2){
      document.querySelector('.Navbar').classList.add("shadow-lg")
      document.querySelector('.Navbar').classList.add("bg-white")
       } else{
        document.querySelector('.Navbar').classList.remove("shadow-lg")
        document.querySelector('.Navbar').classList.remove("bg-white")
       }
    })
  }, [])
  
  return <div className="Navbar w-full flex justify-between  py-2 pt-2 transition-all duration-200  items-center  z-10  top-0 left-0 right-0 fixed">
            {/* nav lef */}
            <div className=" mx-5 flex w-1/2 items-center  py-2 justify-around flex-row-reverse sm:flex-row ">
                  <Link to="/" className=" mx-4 flex items-center"><img className=" w-10  h-10" src={Logo}/> <span className="mt-2 text-violet-900">Design.</span></Link>
                  <div className=" space-x-4 ml-8 hidden sm:inline-block transition-all duration-200 robotofont ">
                    <Link to="/creation" className="text-sm  text-black  hover:bg-blue-500 hover:text-white px-2 py-1 rounded-full transition duration-200">Mes Creations</Link>
                    <Link to="/contact" className="text-sm  text-black hover:bg-blue-500  hover:text-white px-2 py-1 rounded-full transition duration-200 ">Contact</Link>
                  </div>
                  {Menu && <MenuIcon onClick={()=>{Menu(true)}} className="w-10 h-10 sm:hidden bg-blue-200  hover:bg-blue-300 rounded-full px-2 py-1 text-gray-600 hover:text-blue-600 cursor-pointer transition-all duration-200"/>}
                  {!Menu && <div>X</div> }
                  
            </div>
            {/* nav right */}
            <div className=" flex space-x-4 w-1/2 py-2  justify-center">
                 <a target="_blank" href="https://www.twitter.com/nvdesign2/ " className="bg-blue-300 rounded-full px-2 py-2 cursor-pointer hover:ring hover:ring-blue-200 transition duration-200"><Twitter/></a>
                 <a target="_blank" href="https://www.facebook.com/Christ.computer1/ " className="bg-blue-300 rounded-full px-2 py-2 cursor-pointer hover:ring hover:ring-indigo-200 transition duration-200"><Facebook/></a>
                 <a target="_blank" href="https://tiktok.com/@varissa_ruth/ " className="bg-red-400 rounded-full px-2 py-2 cursor-pointer hover:ring hover:ring-red-200 transition duration-200"><Tiktok/></a>  
                 <a target="_blank" href="https://www.instagram.com/nv_design0/" className="bg-red-400 rounded-full px-2 py-2 cursor-pointer hover:ring hover:ring-red-200 transition duration-200"><Instagram/></a>  
            </div>
   
       </div>;
}
