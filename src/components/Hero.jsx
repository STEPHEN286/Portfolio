import { useState } from "react";
import myImage from "../asset/images/my-img.jpg"
import { ImageDrawer } from "./Drawer";
import { FiGithub, FiLinkedin, FiTwitter, FiGlobe } from 'react-icons/fi';
import { FaBehance, FaDribbble, FaTiktok } from 'react-icons/fa';
import AnimatedElement from './AnimatedElement';
import 'animate.css';

function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDrawer = () => {
      setIsOpen(true);
    }

    const socialLinks = [
      { icon: FiGithub, href: "https://github.com/STEPHEN286", label: "GitHub" },
      { icon: FiLinkedin, href: "www.linkedin.com/in/stephen-adjei-kwofie-aa4b44253e", label: "LinkedIn" },
      // { icon: FiTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
      { icon: FaBehance, href: "https://www.behance.net/KGEEGRAPHIKS", label: "Behance" },
      { icon: FaDribbble, href: "https://dribbble.com/kwofie-286", label: "Dribbble" },
      { icon: FaTiktok, href: "https://www.tiktok.com/@k.geegraphiks?_t=ZM-8uYKLzg2bA7&_r=1", label: "TikTok" },
      { icon: FiGlobe, href: "https://bio.site/k.geeGraphic", label: "Graphic Design Portfolio" }
    ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedElement
          animation="fadeIn"
          duration="1.5s"
          threshold={0.5}
        >
          <button 
            type="button" 
            onClick={handleShowDrawer}  
            className="relative group mb-8"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <img 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={myImage} 
                alt="Stephen Adjei Kwofie" 
              />
            </div>
          </button>
        </AnimatedElement>

        <AnimatedElement
          animation="fadeInUp"
          duration="1s"
          delay="0.5s"
          threshold={0.5}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Stephen</span>
          </h1>
        </AnimatedElement>

        <AnimatedElement
          animation="fadeInUp"
          duration="1s"
          delay="0.7s"
          threshold={0.5}
        >
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate Frontend Developer crafting beautiful web experiences | Desktop Application Developer | UI/UX Designer | Graphic Designer
          </p>
        </AnimatedElement>

        <AnimatedElement
          animation="fadeInUp"
          duration="1s"
          delay="0.9s"
          threshold={0.5}
        >
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Let's Connect
            </a>
            <a 
              href={process.env.REACT_APP_RESUME_FILE}
              download="STEPHEN-ADJEI-KWOFIE-CV"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </div>
        </AnimatedElement>

        <AnimatedElement
          animation="fadeInUp"
          duration="1s"
          delay="1.1s"
          threshold={0.5}
        >
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-1 transform"
                style={{ animationDelay: `${1.1 + (index * 0.1)}s` }}
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </AnimatedElement>
      </div>
      
      <ImageDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default Hero;