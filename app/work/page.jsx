"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Athleiure - An Agility Coach",
    title: "project 1",
    description:
      "Athleisure is a web application that helps agility coaches to track their athletes' performance and provide feedback. The application uses computer vision to analyze the athletes' movements and provide insights to the coaches.",
    stack: [
      { name: "Flask" },
      { name: "Python" },
      { name: "OpenCV" },
      { name: "Javascript" },
      { name: "PostgreSQL" },
      { name: "Streamlit" },
    ],
    image: "/assets/work/Athleisure.png",
    live: "",
    github: "https://devpost.com/software/agilitycoach",
  },
  {
    num: "02",
    category: "Artist Popularity Analysis",
    title: "project 2",
    description: "Artist Popularity Analysis is a web application that helps music artists to analyze their popularity on social media platforms. The application uses machine learning algorithms to predict the popularity of the artists based on their social media data.",
    stack: [
      { name: "Flask" },
      { name: "Python" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "Numpy" },
      { name: "PostgreSQL" },
      { name: "Plotly" },
      { name: "nltk" },
    ],
    image: "/assets/work/ArtistPopularityAnalysis.png",
    live: "",
    github: "https://github.com/2023-Fall-CS-415-515/project-3-implementation-informatics",
  },
  {
    num: "03",
    category: "Encrypted Bank Server",
    title: "project 3",
    description: "Encrypted Bank Server is a backend server that provides secure banking services to the users. The server uses encryption algorithms to secure the user data and transactions.",
    stack: [
      { name: "Java" },
      { name: "Multi-threading" },
      { name: "Socket Programming" },
      { name: "Encryption Algorithms" },
    ],
    image: "/assets/work/EncryptedBankServer.png",
    live: "",
    github: "https://github.com/anshah85/EncryptedBankServer",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex; // Use realIndex for correct project mapping
    setProject(projects[realIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.0,
          duration: 0.2,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left section with description */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right section with image */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
