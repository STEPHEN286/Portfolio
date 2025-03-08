import { useState, useEffect } from 'react';
import { FiClock, FiFolder, FiUsers } from 'react-icons/fi';
import { getProjectCount } from '../services/firebase';
import AnimatedElement from './AnimatedElement';
import 'animate.css';

function About() {
  const [projectCount, setProjectCount] = useState("3+");

  useEffect(() => {
    const fetchCount = async () => {
      const count = await getProjectCount();
      setProjectCount(count > 0 ? `${count}+` : "3+");
    };
    fetchCount();
  }, []);

  const stats = [
    { icon: FiClock, value: "3+", label: "Years Experience" },
    { icon: FiFolder, value: projectCount, label: "Projects" },
    { icon: FiUsers, value: "3+", label: "Happy Clients" }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Freelancer",
      period: "04/2023 - Present",
      description: "Built desktop and web applications, optimized database solutions, and delivered client-focused results."
    },
    {
      title: "UI/UX & Graphic Designer",
      company: "Self-Employed",
      period: "01/2021 - Present",
      description: "Designed user-friendly interfaces, logos, and branding materials using Figma and Adobe Illustrator."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement 
          animation="fadeInDown" 
          duration="1s"
          threshold={0.5}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <AnimatedElement 
              animation="fadeInLeft" 
              duration="1s" 
              delay="0.2s"
              threshold={0.3}
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                I am Stephen Adjei Kwofie, a React.js Developer and Software Engineer based in Accra. With years of experience in software engineering, I specialize in developing scalable desktop and web applications, and I have a strong passion for UI/UX design. My work focuses on delivering high-quality, user-friendly solutions tailored to client needs.
              </p>
            </AnimatedElement>
            
            <AnimatedElement 
              animation="fadeInLeft" 
              duration="1s" 
              delay="0.4s"
              threshold={0.3}
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                As a self-employed Software Engineer since 2023, I have successfully built dynamic web applications using React.js, HTML, CSS, and JavaScript, as well as desktop applications leveraging C#, WinForms, and SQL Server. Additionally, my UI/UX design expertise enables me to create visually appealing and accessible interfaces using Figma and Adobe Illustrator.
              </p>
            </AnimatedElement>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="zoomIn" 
                  duration="0.8s" 
                  delay={`${0.2 * (index + 1)}s`}
                  threshold={0.2}
                >
                  <div className="text-center p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-900" />
                    <span className="block text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-gray-600 text-sm">{stat.label}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedElement 
                key={index} 
                animation="fadeInRight" 
                duration="1s" 
                delay={`${0.3 * (index + 1)}s`}
                threshold={0.3}
              >
                <div 
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-gray-900 to-gray-600"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-gray-900"></div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 className="font-semibold text-gray-900 text-lg">{exp.title}</h3>
                    <p className="text-gray-600 mt-1">{exp.company} • {exp.period}</p>
                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
