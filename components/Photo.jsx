"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div 
        initial={{opacity: 0, scale: 0.8}}
        animate={{
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            },
        }}
        className="relative"
    >
        {/* circle - moved before image to be behind */}
        <motion.svg 
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.circle 
                cx="253" 
                cy="253" 
                r="250" 
                stroke="#00ff99" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity, 
                    repeatType: "reverse",
                }}
            />
        </motion.svg>

        {/* image - positioned on top */}
        <motion.div 
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.2,
                    ease: "easeInOut"
                },
            }}
            className="w-[290px] h-[290px] xl:w-[490px] xl:h-[490px] mix-blend-lighten
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <Image 
                src="/assets/Akshat.png"
                alt="Akshat Shah"
                fill
                priority
                className="object-cover rounded-full"
            />
        </motion.div>
    </motion.div>
  </div>;
}

export default Photo;