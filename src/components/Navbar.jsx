import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
   
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "https://kgeegraphiks.web.app/", label: "Graphics Portfolio", isExternal: true },
  ];

  return (
    <nav className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Step<span className="text-indigo-700">Tech</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-gray-700 hover:text-custom transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={process.env.REACT_APP_RESUME_FILE}
              download="STEPHEN-ADJEI-KWOFIE-CV"
              className="bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Download CV

            </a>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="space-y-2 px-4 pt-2 pb-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  onClick={closeMenu}
                  className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-custom rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={process.env.REACT_APP_RESUME_FILE}
                download="STEPHEN-ADJEI-KWOFIE-CV"
                onClick={closeMenu}
                className="block  bg-indigo-700  text-white px-4 py-2.5 text-base font-medium rounded-lg text-center mt-4"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
