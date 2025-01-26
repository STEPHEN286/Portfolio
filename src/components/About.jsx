function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am Stephen Adjei Kwofie, a React.js Developer and Software Engineer based in Accra. With years of experience in software engineering, I specialize in developing scalable desktop and web applications, and I have a strong passion for UI/UX design. My work focuses on delivering high-quality, user-friendly solutions tailored to client needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a self-employed Software Engineer since 2023, I have successfully built dynamic web applications using React.js, HTML, CSS, and JavaScript, as well as desktop applications leveraging C#, WinForms, and SQL Server. Additionally, my UI/UX design expertise enables me to create visually appealing and accessible interfaces using Figma and Adobe Illustrator.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <span className="block text-2xl font-bold text-custom">2+</span>
                <span className="text-gray-500">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-custom">3+</span>
                <span className="text-gray-500">Projects </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-custom">3+</span>
                <span className="text-gray-500">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-700 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Software Engineer</h3>
              <p className="text-gray-600">Freelancer • 04/2023 - Present</p>
              <p className="text-gray-500 text-sm">
                Built desktop and web applications, optimized database solutions, and delivered client-focused results.
              </p>
            </div>
            <div className="border-l-4 border-orange-700  pl-4 py-2">
              <h3 className="font-semibold text-gray-900">UI/UX & Graphic Designer</h3>
              <p className="text-gray-600">Self-Employed • 01/2021 - Present</p>
              <p className="text-gray-500 text-sm">
                Designed user-friendly interfaces, logos, and branding materials using Figma and Adobe Illustrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
