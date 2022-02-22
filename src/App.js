import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Profil from './components/Profil';
import Creas from './components/Creas';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import  {AnimatePresence} from "framer-motion"
import {HomeIcon,ChartPieIcon,PhoneIncomingIcon} from "@heroicons/react/solid"
import {Link} from "react-router-dom"


function App() {
     const [menu, setMenu] = useState(false)
  const siteName = "Varissa"

  useEffect(() => {
     window.addEventListener('scroll',()=>{
       const {scrollTop} = document.documentElement;
       
        if(scrollTop > 1){
          setMenu(false)
        }
     })
   }, [])
  return (
      <AnimatePresence>
               <div className="app overflow-hidden flex flex-col bg-gradient-to-t bg-white relative">
             
           
                    {/* header */}
                         <Router >
                              <div className="header">
                                        <NavBar Menu={setMenu}/>
                              </div>
                                {/* MENU HOVER */}
                              {menu && (
                               <div>
                               <div onClick={()=>{setMenu(false)}} className="backface bg-black absolute inset-0 opacity-20 z-20 transition-all duration-200"></div>
                                   <div className="bg-white h-1/3 border-l-4 w-9/12 border-blue-600 shadow fixed top-10 left-16 rounded-sm z-20 transition-all duration-200">
                                   <div className=" p-8  transition-all duration-200 flex flex-col space-y-2 ">
                                        <Link onClick={()=>{setMenu(false)}} to="/" className="text-sm font-semibold text-indigo-900 hover:bg-indigo-100 px-2 py-3  transition duration-200 flex space-x-2"><HomeIcon className="w-5 h-5"/><span>Home</span></Link>
                                        <Link onClick={()=>{setMenu(false)}} to="/creation" className="text-sm font-semibold text-indigo-900 hover:bg-indigo-100 px-2 py-3  transition duration-200 flex space-x-2"><ChartPieIcon className="w-5 h-5"/><span>Mes Creations</span></Link>
                                        <Link onClick={()=>{setMenu(false)}} to="/contact" className="text-sm font-semibold text-indigo-900 hover:bg-indigo-100 px-2 py-3  transition duration-200 flex space-x-2"><PhoneIncomingIcon className="w-5 h-5"/><span>Contact</span></Link>
                                        </div>
                                   </div>
                               </div>
                              )}
                              <div className="main flex-grow">
                                   <Routes>
                                        <Route path="/" element={<Profil />}/>
                                        <Route path="/creation" element={<Creas/>}/>
                                        <Route path="/contact" element={<Contact />}/>
                                        <Route path="*" element={<NotFound/>}/>
                                   </Routes>
                              </div>
                         </Router>
                         <div className="footer">
                         <Footer siteName={siteName}/>
                         </div>      
               </div>
</AnimatePresence>
  );
}

export default App;
