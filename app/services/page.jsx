"use client";

import { useState, useEffect } from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Software Development",
    description: "I build responsive web applications and websites using modern web technologies like React, Next.js, and TypeScript, focusing on performance and user experience.",
    href: "/work",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    num: "02",
    title: "Full Stack Development",
    description: "I specialize in full stack development, creating seamless applications with robust front-end interfaces and scalable back-end architectures.",
    href: "/work",
    tech: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    num: "03",
    title: "Quality Assurance",
    description: "I implement comprehensive testing strategies and quality control measures to ensure reliable, bug-free applications that exceed client expectations.",
    href: "/work",
    tech: ["Jest", "Testing Library", "Cypress", "CI/CD"]
  },
  {
    num: "04",
    title: "Backend Development",
    description: "I architect and develop secure, scalable backend solutions using modern technologies and best practices for optimal performance.",
    href: "/work",
    tech: ["Node.js", "Express", "MongoDB", "AWS"]
  },
];

const Services = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }

  return (
    <section className="h-[100dvh] flex items-start md:items-center py-12 md:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] overflow-y-auto md:overflow-visible max-h-[calc(100vh-96px)] md:max-h-none px-4 md:px-0"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="flex-1 flex flex-col justify-center gap-6 group bg-[#1a1a1a] p-6 rounded-lg
              hover:bg-[#222222] transition-all duration-300"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent 
                group-hover:text-accent transition-all duration-500">
                  {service.num}
                </div>
                <Link 
                  href={service.href} 
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                  transition-all duration-500 flex justify-center items-center 
                  hover:scale-110 hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {service.tech.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;