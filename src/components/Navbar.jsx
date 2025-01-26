import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const resumeFile =  process.env.REACT_APP_RESUME_FILE
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed left-0 top-0 w-full z-10 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <a href="/" className="text-xl font-bold text-custom">
            StepTech
          </a>

          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-custom"
              >
                {link.label}
              </a>
            ))}
           <a
          
  href={`${resumeFile}`}
  download="STEPHEN-ADJEI-KWOFIE-CV"
  className="bg-orange-600 text-white px-4 py-2 !rounded-button"
>
  Resume
</a>
          </div>

         
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-custom"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${resumeFile}`}
  download="STEPHEN-ADJEI-KWOFIE-CV"
                onClick={closeMenu}
                className="block bg-orange-600 text-white px-3 py-2 text-base font-medium rounded-md"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
