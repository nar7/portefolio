import React,{useState} from 'react';
import {motion} from "framer-motion"
import image1 from '../asset/image/1.png'
import image2 from '../asset/image/IMG_20220130_154734_52.png'
import image3 from '../asset/image/IMG_20220130_154831_089.png'
import image4 from '../asset/image/IMG_20220130_154837_113.png'
import image5 from '../asset/image/IMG_20220130_154908_626.png'
import image6 from '../asset/image/IMG_20220130_154930_806.jpg'
import image7 from '../asset/image/IMG_20220130_154955_112.png'
import image8 from '../asset/image/IMG_20220130_155004_441.png'
import image9 from '../asset/image/IMG_20220130_155035_843.jpg'
import image10 from '../asset/image/IMG_20220130_155047_387.jpg'


export default function Creas() {
 
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})



  const items = [
    {id:1, text:"Présentation banderole pour anniversaire", content:"", image:image1},
    {id:2, text:"Présentation banderole pour anniversaire", content:"", image:image2},
    {id:3, text:"Présentation d’une maquette pour un tasse simple", content:"", image:image10},
    {id:4, text:"Carte de visite professionnelle Format 8,5 x 5,5", content:"", image:image8},
    {id:5, text:"Calendrier de poche Format A6", content:"", image:image5},
    {id:6, text:"Etiquette personnalisée Pour bouteille de vin", content:"", image:image6},
    {id:7, text:"Flyer de présentation de menu pour un restaurant Format A5", content:"", image:image7},
    {id:8, text:"Présentation flyer format A5", content:"", image:image3},
    {id:9, text:"Flyer de présentation de menu pour un restaurant Format 8,5 x 5,5", content:"", image:image9},
    {id:10, text:"Présentation flyer format A5", content:"", image:image4},
  ]

 
const Modal = ()=>{
    return (
      <motion.div onClick={()=>setOpen(false)} className="bg-black inset-0 absolute opacity-95  z-50 smooth">

          <motion.div initial={{scale:0.3}} animate={{scale:[1,0.4,0.3,1] }} transition={{duration:0.4}} className="mt-10 sm:w-4/5 sm:p-2 md:mx-auto md:w-3/5  p-8 sm:mx-auto  h-screen">
          <p onClick={()=>setOpen(false)} className=" absolute text-2xl shadow  border-2 hover:bg-slate-400 hover:text-red-500 transition-all -ml-8 -mt-5 bg-cyan-900 rounded-full m-2 py-4 px-6 cursor-pointer text-white">X</p>
          <img  className=" cursor-pointer object-fill transition-all  rounded" src={window.location.origin+data.image}/>
             
          </motion.div>
      </motion.div>
     )
}

const openModal = (item)=>{
    setOpen(true)
    window.scroll({
      top:15,
      left:0,
      behavior:"smooth"
    })
    setData(item)
    
}
 

  return <motion.div
            initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5}}
          exit={{opacity:0}}
          className="smooth mt-20"
         >
         {open && <Modal/>}
           
          <div className="">
              <p className="pt-4 text-4xl sm:text-6xl uppercase font-bold text-blue-700 text-center shadow-inherit">Mes Creations</p>
              <div className="separtor1 border-b border-gray-300 py-4 w-9/12 mx-auto shadow-sm"></div>
              <div className="content sm:grid md:grid-cols-3 sm:grid-cols-2   sm:gap-10 w-full md:w-10/12 md:mx-auto p-2 mt-6">
                   {items && items.map((item,i)=>{
                     return (
                       <motion.div 

                          initial={{y:-50 ,x:i % 2 === 0 ? -50 : 50 , opacity:0.1}}
                          animate={{y:0 ,x:0 , opacity:1}}
                          transition={{delay:0.2*i,duration:0.3}}

                          onClick={()=>openModal(item)} className="rounded-lg md:mx-2 lg:w-64 md:w-48 sm:w-64 w-96 overflow-hidden mx-auto mt-8 shadow" key={item.id}>
                         <img  className=" cursor-pointer object-fill transition-all w-96  h-72  rounded" src={window.location.origin+item.image}/>  
                         <p className="text-center py-6 text-indigo-700 font-semibold">{item.text}</p>
                       </motion.div>
                     )
                   })}
              </div>
          </div>
        
  </motion.div>;
}
