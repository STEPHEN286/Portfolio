function Navbar() {
  return (
    <nav className="">
    <div className="max-w-8xl mx-auto px-4 bg-white sm:px-6 lg:px-8 shadow-sm">
        <div className="flex justify-between h-16">
            <div className="flex items-center">
                <a href="r" className="text-xl font-bold text-custom">SAK</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-gray-700 hover:text-custom">About</a>
                <a href="#skills" className="text-gray-700 hover:text-custom">Skills</a>
                <a href="#projects" className="text-gray-700 hover:text-custom">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-custom">Contact</a>
                <a href="R" className="bg-black text-white px-4 py-2 !rounded-button">Resume</a>
            </div>
        </div>
    </div>
</nav>

  );
}

export default Navbar;