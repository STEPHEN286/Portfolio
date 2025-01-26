import About from "./components/About";
import BackgroundComponent from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
  <>
      <Navbar />
      <Hero />
      
      <About />
      <BackgroundComponent />
      <Skills />
      <Projects />
      <BackgroundComponent />
      <Contact />
      <Footer />
  </>
  );
}

export default App;
