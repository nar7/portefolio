import React from 'react';
import Image from '../asset/Profil.png';
import Photoshop from '../asset/Logo/photoshop.png';
import illustrator from '../asset/Logo/illustrator.png';
import word from '../asset/Logo/word.png';
import publisher from '../asset/Logo/publisher.png';


import RandomText from './RandomText';
import {ChevronDoubleRightIcon} from '@heroicons/react/solid'
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"


export default function Profil() {
   const navigate = useNavigate()
  return <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5}}
          exit={{opacity:0}}
         >
            <RandomText/>
            <div className="flex  justify-center  section  w-full shadow ">
              
              <div className="sm:w-1/2  w-full sm:items-center sm:flex-row flex-col flex justify-center sm:space-x-16 py-6 ">
                  <motion.img  
                    initial={{opacity:0,y:10}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:0.5,delay:0.3}}
                  alt="profil" className=" -mt-32 mx-auto " src={Image}/>
                  <div className="space-y-3">
                      <p className="text-black text-center font-bold capitalize text-4xl -mt-10">Varissa Blonde</p>
                      <p className=" text-center text-gray-800 px-2">Graphiste / Bureautique</p>
                    <div className=" space-x-2 flex justify-center">
                        <button  onClick={()=>{ navigate('/contact') ;   window.scroll({top:15,left:0,behavior:"smooth"})}} className="bg-white py-2 px-3 shadow-md border text-xs font-bold rounded text-black">CONTACTEZ MOI</button>
                        <button  onClick={()=>{ navigate('/creation') ;   window.scroll({top:15,left:0,behavior:"smooth"})}} className=" bg-white py-2 px-4 shadow-md border text-xs font-bold rounded text-black">MES CREATIONS</button>
                    </div>
                  </div>
              </div>
            
          </div>
          <div className="content  flex flex-col items-center space-y-6 p-6 py-9">
             <p className=" text-justify text-gray-600 md:px-36 leading-8"> <span className=" text-3xl font-bold text-blue-500">NV Design </span>est une entreprise dont le but primordial est de créer et ou d’améliorer les jeunes <span className=" bg-yellow-200 uppercase font-bold px-2 py-1 text-yellow-600">StartUP</span>, entreprises Camerounaises et Africaines à travers des <span className=" bg-yellow-200 uppercase font-bold px-2 py-1 text-yellow-600">visuels</span> de qualité</p>
             
             <div className="content1">
              <p className="text-4xl sm:text-6xl uppercase font-bold text-blue-700 text-center shadow-inherit my-5">Competences</p>
               <div className="content2 md:grid md:grid-cols-2 md:gap-2">
                    <div className="mt-6">
                        <div className="bg-blue-300 flex items-center p-6 rounded shadow">
                                    <img className="w-16 h-16 mr-4" src={Photoshop}/>
                                <div>
                                    <p className=" text-blue-900 text-xl font-bold">Photoshop</p>
                                    <p className=" text-gray-800 text-sm">retouche photo, banderole,flyers,<br/>banderole,banniere,badge professionnel, ...</p>  
                                <div className="bar bg-white w-48 text-center  mt-2 shadow">
                                    <div className="bg-blue-600 w-1/2 text-xs font-bold text-white">50%</div>
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className=" bg-orange-300 flex items-center p-6 rounded shadow">
                                    <img className="w-16 h-16 mr-4" src={illustrator}/>
                                <div>
                                    <p className=" text-blue-900 text-xl font-bold">Illutrator</p>
                                    <p className=" text-gray-800 text-sm">carte visite, billet de mariage, cachet,logo,calendrier, <br/>faire part </p>  
                                <div className="bar bg-white w-48 text-center  mt-2 shadow">
                                    <div className="bg-blue-600 w-9/12 text-xs font-bold text-white">75%</div>
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="bg-blue-300 flex items-center p-6 rounded shadow">
                                    <img className="w-16 h-16 mr-4" src={word}/>
                                <div>
                                    <p className=" text-blue-900 text-xl font-bold">Ms Word</p>
                                    <p className=" text-gray-800 text-sm">traitement de texte, saisir,scan, <br/>impression ... </p>  
                                <div className="bar bg-white w-48 text-center  mt-2 shadow">
                                    <div className="bg-blue-600 w-11/12 text-xs font-bold text-white">90%</div>
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="bg-green-300 flex items-center p-6 rounded shadow">
                                    <img className="w-16 h-16 mr-4" src={publisher}/>
                                <div>
                                    <p className=" text-blue-900 text-xl font-bold">Ms publisher</p>
                                    <p className=" text-gray-800 text-sm">conception carte visite, billet de mariage,<br/>faire part ...</p>  
                                <div className="bar bg-white w-48 text-center  mt-2 shadow">
                                    <div className="bg-blue-600 w-10/12 text-xs font-bold text-white">85%</div>
                                </div>
                                </div>
                        </div>
                    </div>

               </div>
             </div>
             <div className="justify-center mt-4">
                 <p className=" text-1xl font-semibold capitalize text-blue-500 py-2 bg-blue-200 px-2 shadow-sm "> laissez vous guider par mes creations </p>
                  <div className="border-2 border-blue-300 ml-24 my-2 inline-block rounded-full p-2 shadow cursor-pointer transition-all duration-200 ring-blue-300 hover:ring">
                      <ChevronDoubleRightIcon onClick={()=>{ navigate('/creation') ;   window.scroll({top:15,left:0,behavior:"smooth"})}} className="h-6 w-6 font-bold text-indigo-500 inline"/>
                  </div>
             </div>
          </div>
  </motion.div>
}
