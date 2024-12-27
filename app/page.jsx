"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className="font-light">{displayText}</span>;
};

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }

  return (
    <section className="flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-white/60">Currently working on: React & Next.js Projects, Cloud Technologies</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-xl inline-block mb-4"
            >
              <TypewriterText text="Software Engineer" speed={25} />
            </motion.div>

            <h1 className="h1">
              Hello I'm <br /> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-accent inline-block relative pb-4"
              >
                Akshat Shah
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                />
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="max-w-[500px] mb-9 text-white/80 leading-relaxed"
            >
              I'm a software engineer based in United States, with 8+ years of experience in building large scale infrastructure, web applications and automation tools. I specialize in building high-quality websites and applications with a focus on performance, accessibility and user experience.
            </motion.p>

            {/* btn and socials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 group" 
                onClick={() => window.open("/assets/Akshat_Shah.pdf", "_blank")}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl group-hover:animate-bounce" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
              </div>
            </motion.div>
          </motion.div>

          {/* photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>

      {/* Stats with scroll reveal */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <Stats />
      </motion.div> */}
    </section>
  );
}

export default Home;