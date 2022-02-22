import React from 'react';
import Mz from '../asset/Logo/MzConsult.png'
import LogoCk from '../asset/Logo/LogoCk.png'
import bodyLogo from '../asset/Logo/bodyLogo.png'
import colegueLogo from '../asset/Logo/colegue.png'
import inspirationLogo from '../asset/Logo/inpiration.png'

export default function Footer({siteName}) {
  return <div className="w-full relative">
      <svg className="fill-violet-900" xmlns="http://www.w3.org/2000/svg" width="2389.487" height="105.166" viewBox="0 0 2389.487 105.166">
  <path id="Tracé_2" data-name="Tracé 2" d="M-169.668,1021.372,2219.82,916.206v105.166Z" transform="translate(169.668 -916.206)"/>
</svg>


            <div className="w-full py-2 bg-violet-900">
                  <div className=""> 
                       {/* icons */}
                       
                      <div className="">
                        
                        <div className="p-3 w-full md:w-1/2 md:mx-auto">
                            <p className="text-white text-sm md:ml-36 md:text-xl py-3 mb-2 font-bold">Les Partenaires</p>
                            <div className="flex w-1/2 md:ml-32 ">
                              <img className=" w-18 h-16 saturate-0 hover:saturate-100 transition-all duration-200" src={Mz}/>
                              <img className="w-14 h-14 saturate-0 hover:saturate-100 transition-all duration-200" src={LogoCk}/>
                              <img className=" w-14 h-14 ml-4 rounded-full saturate-0 hover:saturate-100 transition-all duration-200" src={bodyLogo}/>
                              <img className=" w-14 h-14 ml-4 rounded-full bg-white saturate-0 hover:saturate-100 transition-all duration-200 " src={colegueLogo}/>
                              <img className=" w-14 h-14 ml-4 rounded-full bg-white saturate-0 hover:saturate-100 transition-all duration-200" src={inspirationLogo}/>
                            </div>
                        </div>
                        <div className="separtor1 border-b border-black opacity-20 py-1  mb:w-1/3 mx-auto shadow rounded-sm"></div>
                        
                        <div className="text-center  p-2">
                              <div className="flex space-x-3 justify-center w-1/3 mx-auto p-2  ">
                                  <a>
                                  <svg className="w-7 h-7 fill-blue-900 bg-white px-2 rounded-full" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                  </a>
                                  <a>
                                  <svg className="w-7 h-7 fill-red-700 bg-white px-2 rounded-full" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                                  </a>
                                  <a>
                                  <svg className="w-7 h-7 fill-blue-900 bg-white  px-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                  </a>
                              </div>
                                    {/* copyright */}
                                    <p className="py-4"><strong>@</strong>copyright {siteName}.All Rights Reserved.</p>
                                    <p className="text-white text-sm font-bold">Created by @nar7</p>
                        </div>

                      </div>
                  </div>
            </div>
         </div>;
}
