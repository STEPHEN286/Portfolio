import { useState } from "react";
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { FaBehance, FaDribbble, FaTiktok } from 'react-icons/fa';
import AnimatedElement from './AnimatedElement';
import 'animate.css';

function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/STEPHEN286", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/stephen-adjei-kwofie-aa4b44253e", label: "LinkedIn" },
    { icon: FaBehance, href: "https://www.behance.net/KGEEGRAPHIKS", label: "Behance" },
    { icon: FaDribbble, href: "https://dribbble.com/kwofie-286", label: "Dribbble" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@k.geegraphiks?_t=ZM-8uYKLzg2bA7&_r=1", label: "TikTok" },
    { icon: FiGlobe, href: "https://bio.site/k.geeGraphic", label: "Portfolio Site" },
  ];

  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center items-center px-6 py-20 overflow-hidden text-slate-900">
      
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute top-[-20%] left-[-25%] w-[600px] h-[600px] bg-gradient-to-r from-indigo-600 via-sky-300  opacity-30 rounded-full "></div>
    <div className="absolute bottom-[-10%] right-[-15%] w-[500px] h-[500px] bg-gradient-to-r from-pink-300 via-yellow-200 to-indigo-200  opacity-20 rounded-full blur-xl "></div>
  </div>

      {/* Content */}
      <div className="max-w-5xl text-center z-10">
        <AnimatedElement animation="fadeInDown" duration="1s">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">Stephen</span>
          </h1>
        </AnimatedElement>

        <AnimatedElement animation="fadeInUp" delay="0.5s">
          <p className="mt-6 text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Frontend Developer · Desktop App Dev · UI/UX Enthusiast · Graphic Designer
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fadeInUp" delay="0.7s">
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 rounded-full text-lg font-medium shadow-lg"
            >
              Let’s Connect
            </a>
            <a
              href={process.env.REACT_APP_RESUME_FILE}
              download="STEPHEN-ADJEI-KWOFIE-CV"
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50 transition-all duration-300 rounded-full text-lg font-medium shadow-sm"
            >
              Download CV
            </a>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeInUp" delay="0.9s">
          <div className="mt-10 flex justify-center gap-6 flex-wrap text-slate-600">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transform hover:-translate-y-1 transition duration-300"
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

export default Hero;
