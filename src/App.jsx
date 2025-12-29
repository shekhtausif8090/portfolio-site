import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-[#64ffda] text-xl font-mono">ST</div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "about", num: "01", label: "About" },
              { id: "experience", num: "02", label: "Experience" },
              { id: "projects", num: "03", label: "Projects" },
              { id: "contact", num: "04", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-sm transition-colors hover:text-[#64ffda] ${
                  activeSection === item.id ? "text-[#64ffda]" : "text-gray-400"
                }`}
              >
                <span className="text-[#64ffda]">{item.num}.</span> {item.label}
              </button>
            ))}
            <a
              href="#"
              className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10 transition-colors font-mono text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Summary />
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
