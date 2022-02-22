import React,{useEffect,useState} from 'react';
import {motion} from 'framer-motion'

export default function RandomText() {

    const blog = ['Graphiste','Manager','Bureautique'];
    const [value, setvalue] = useState(blog[0]);
    const [index, setindex] = useState(0);
    

    useEffect(() => {
        const timer = setInterval(() => {  
                 setindex((index)=>(index+1)% blog.length)
        }, 2000);

        return ()=> clearInterval(timer)
    }, []);

    useEffect(() => {
            setvalue(blog[index])
    }, [index]);
    
    const transition = {
        loop:Infinity,
        duration:2,
    }
    

  return <motion.div  className="custom-img  text-center py-8 w-full  flex justify-center items-center shadow">
            <motion.p
           
            className="py-5 px-4 mx-16 rounded drop-shadow-md uppercase font-bold text-white md:text-7xl text-5xl"
             animate={{
                 x:0,
                 opacity:[0,1,1,0]
             }}
              transition={{
                  type:"tween",                 
              }}
             initial={{
                 x:-20,
                 opacity:[0,1,1,0],
                
             }}
             transition={transition}
            >{value}</motion.p>
       </motion.div>;
}
