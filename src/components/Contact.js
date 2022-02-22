import React from 'react';
import ContactSVG from "../asset/ContactSVG.png"
import {motion} from "framer-motion"
import {AtSymbolIcon, ChatAltIcon,LocationMarkerIcon} from "@heroicons/react/solid"

export default function Contact() {
  return <motion.div
  
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5}}
          exit={{opacity:0}}
          className="w-full flex flex-col mt-20 p-8 ">
          <div className="">
               <p className=" text-4xl  sm:text-6xl uppercase font-bold text-blue-700 text-center"> Contactez-Nous</p>
               <div className="separtor1 border-b border-gray-300 py-4 w-9/12 mx-auto shadow-sm"></div>
               <p className=" text-blue-500 px-2 text-justify py-4 text-3xl md:px-32 leading-9">Pour <span className=" font-bold text-blue-800">Booster</span> votre activité avec un <span className=" font-bold text-blue-800">Visuel Captivant</span>, vous entrepreneurs , je vous aide à décupler vos ventes grâce à mes visuels.</p>
                <div className="">
                     <div className="sm:grid sm:grid-cols-2  w-4/5 md:w-1/2 md:mx-auto">
                         <div className="section1 space-y-1 p-4">
                            <p className="text-blue-700 text-2xl"><ChatAltIcon className="w-6 h-6 inline-block mr-2"/>Nos contacts</p>
                                 
                            <p>
                              <span className="text-gray-700">Telephone:</span>
                              <span className="text-indigo-900 text-xl"> 657741421/670261355</span>
                            </p>
                            <p>
                              <span className="text-gray-700">Whatsapp:</span>
                              <span className="text-indigo-900 text-xl"> 657741421</span>
                            </p>
                           
                         </div>
                         <div className="section2 mt-2 space-y-1 p-2">
                         <p className="text-blue-700 text-2xl"><LocationMarkerIcon className="w-6 h-6 inline-block mr-1"/>Localisation</p>
                           <div className="">
                              <span className="text-gray-700 ml-2">Ville:</span>
                              <span> Douala</span>
                           </div>
                          </div>
                       
                         
                     </div>
                </div>
          </div>
          <div className="md:mx-auto mt-4">
             <img src={ContactSVG}/>
          </div>
  </motion.div>;
}
