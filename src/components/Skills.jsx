import React from 'react';
import { AiFillGithub, AiOutlineHtml5, AiOutlineCode, AiFillDatabase, AiOutlineDesktop, AiOutlineTool, AiOutlineApi } from 'react-icons/ai';
import { FaJs, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { FaMobileScreen } from "react-icons/fa6";
import AnimatedElement from './AnimatedElement';
import 'animate.css';

const skillsData = [
  {
    category: "Programming Languages",
    details: [
      { name: "JavaScript", percentage: 95, icon: <AiOutlineCode /> },
      { name: "C#", percentage: 70, icon: <AiOutlineDesktop /> },
      { name: "PHP", percentage: 30, icon: <AiOutlineCode /> },
    ],
    type: "progress",
  },
  {
    category: "Web Development Skills",
    details: [
      { name: "HTML ", icon: <AiOutlineHtml5 /> },
      { name: "CSS ", icon: <FaCss3 /> },
      { name: "Javascript", icon: <FaJs /> },
    ],
    type: "list",
  },
  {
    category: "Application Development",
    details: [
      { name: "C#", icon: <AiOutlineDesktop /> },
      { name: "WinForms", icon: <AiOutlineDesktop /> },
      { name: "Guna UI", icon: <AiOutlineDesktop /> },
    ],
    type: "list",
  },
  {
    category: "Frameworks and Libraries",
    details: [
      { name: "React.js", icon: <FaReact/> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
    type: "list",
  },
  {
    category: "Database Management",
    details: [
      { name: "MSSQL", icon: <AiFillDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    type: "list",
  },
  {
    category: "Tools and Platforms",
    details: [
      { name: "Git/GitHub", icon: <AiFillGithub /> },
      { name: "Figma/Adobe XD", icon: <IoLogoFigma /> },
      { name: "Visual Studio", icon: <DiVisualstudio /> },
      { name: "VS Code", icon: <BiLogoVisualStudio/> },
      { name: "MSSQL Management Studio", icon: <AiFillDatabase /> },
      { name: "Firebase", icon: <RiFirebaseFill/> },
    ],
    type: "list",
  },
  {
    category: "Other Skills",
    details: [
      { name: "Responsive Web Design", icon: <FaMobileScreen /> },
      { name: "Cross-Browser Compatibility", icon: <BsBrowserChrome /> },
      { name: "API Integration", icon: <AiOutlineApi /> },
    ],
    type: "list",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement 
          animation="fadeInDown" 
          duration="1s"
          threshold={0.5}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <AnimatedElement
              key={skill.category}
              animation="fadeInUp"
              duration="0.8s"
              delay={`${0.2 * (index % 3)}s`}
              threshold={0.2}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                {skill.type === "progress" ? (
                  <div className="space-y-3">
                    {skill.details.map((item, itemIndex) => (
                      <div key={item.name} className="relative">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">{item.name}</span>
                          <span className="text-custom">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-gray-900 to-gray-600 h-2 rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${item.percentage}%`,
                              transitionDelay: `${0.3 + (itemIndex * 0.2)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {skill.details.map((item, itemIndex) => (
                      <div 
                        key={item.name} 
                        className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-200"
                        style={{ 
                          animationDelay: `${0.3 + (itemIndex * 0.1)}s`
                        }}
                      >
                        <span className="text-gray-700 text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
