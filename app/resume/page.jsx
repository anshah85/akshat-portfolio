"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaJs, 
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDatabase,
  FaFlask,
  FaGithub,
  FaJenkins,
  FaMapMarkerAlt
 } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description: "Software Engineer with 8+ years of experience in developing large scale infrastructure applications. I specialize in front-end development with React.js and Next.js. I am passionate about creating user-friendly and responsive web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Akshat Shah"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 607 370 8772"
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "ashah85@binghamton.edu"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati, French"
    },
  ]
};

// experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Software Development and Quality Assurance Engineer with 8+ years of experience in developing large scale infrastructure applications. I specialize in front-end development with React.js and Next.js. I am passionate about creating user-friendly and responsive web applications.", 
  items: [
    {
      company: "Binghamton University",
      position: "Graduate Assistant",
      location: "Binghamton, NY",
      duration: "Aug 2023 - Present",
    },
    {
      company: "Infosys Limited",
      position: "Test Analyst",
      location: "Cape Town, South Africa",
      duration: "Apr 2019 - Aug 2022",
    },
    {
      company: "Infosys Limited",
      position: "Test Engineer",
      location: "Cape Town, South Africa",
      duration: "Mar 2015 - Mar 2019",
    },
    {
      company: "Infosys Limited",
      position: "Software Engineer Trainee",
      location: "Mysore, India",
      duration: "Oct 2014 - Feb 2015",
    },
    {
      company: "Emerson Process Management",
      position: "Intern",
      location: "Vadodara, India",
      duration: "Jun 2013 - Aug 2013",
    },
  ]
};

// education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Educational background and qualifications",
  items: [
    {
      institution: "Binghamton University",
      degree: "Master of Science in Computer Science",
      duration: "2022 - 2024",
      location: "Binghamton, NY",
    },
    {
      institution: "Gujarat Technological University",
      degree: "Bachelor of Engineering in Instrumentation & Control",
      duration: "2010 - 2014",
      location: "Gandhinagar, India",
    },
  ]
};

// skills data

const skills = {
  title: "My skills",
  description: "I have experience working with the following technologies and tools",
  skillList: [
    {
      icon: <FaJava />,
      name: "java",
    }, 
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaDatabase />,
      name: "sql",
    },
    {
      icon: <FaFlask />,
      name: "flask",
    }, 
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaJenkins />,
      name: "jenkins",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";

const Resume = () => {
  return <motion.div
    initial={{opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        delay: 1.0,
        duration: 0.2,
        ease: "easeIn"
      },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {/* location */}
                        <div className="flex items-center gap-3">
                          {/* <span className="w-[6px] h-[6px] bg-accent"></span> */}
                          <FaMapMarkerAlt className="w-4 h-4 text-accent" />
                          <p className="text-white/60">{item.location}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        {/* location */}
                        <div className="flex items-center gap-3">
                          {/* <span className="w-[6px] h-[6px] bg-accent"></span> */}
                          <FaMapMarkerAlt className="w-4 h-4 text-accent" />
                          <p className="text-white/60">{item.location}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index) => {
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                );
              })}
            </ul>
          </TabsContent>
          {/* about */}
          <TabsContent 
            value="about" 
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li 
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
}

export default Resume;