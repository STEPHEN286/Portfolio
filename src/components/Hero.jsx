import { useState } from "react";
import myImage from "../asset/images/my-img.jpg"
import { ImageDrawer } from "./Drawer";
function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDrawer = () => {
      setIsOpen(true);
      // console.log("isOpen");
      
      }
  return (
    <section className=" flex-col flex w-full justify-center items-center  bg-white  md:items-center p-7 ">
           
           <button type="button" onClick={handleShowDrawer}  className="group relative bg-black rounded-full overflow-hidden w-28 h-28">
  <img 
    className="h-full w-full object-cover  transition-transform duration-300 group-hover:scale-110" 
    src={myImage} 
    alt="Developer" 
  />
</button>
                            <h1 className="text-4xl text-center font-bold text-gray-900 sm:text-5xl md:text-5xl">
                                <span className="block text-2xl">Hi, I'm Stephen </span>
                                <span className="block text-custom">Software Engineer & Web Developer</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Crafting digital experiences with clean code and innovative solutions. Specialized in full-stack development and modern web technologies.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-black !rounded-button">
                                        Get in Touch
                                    </a>
                                </div>
                            </div>
                     
                
                            <ImageDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
                     
            
        </section>
  );
}

export default Hero;