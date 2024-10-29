"use client"
import React, { useRef } from "react";
import {animate, easeInOut, motion, useInView} from "framer-motion"


export default function IconBox({children}: {children: React.ReactNode}) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return(
        <motion.div 
            ref={ref}
            initial={{x:-50, rotate:0, opacity:0}} 
            animate={isInView ? { x:0, opacity:1, animate:0 } : {x:-50, opacity:0}}
            whileHover={{rotate:360}}
            transition={{
                x:{
                    duration: 0.8,
                    ease: 'easeOut'
                },
                rotate:{
                    duration: 0.8,
                    ease: "easeOut"
                },
                opacity:{
                    duration: 0.5,
                    ease:"easeInOut"
                }
            }}
            className="w-16 h-16 border p-3 rounded-md bg-transparent flex justify-center items-center border-gray-400"
        >
                {children}
        </motion.div>
    );
}