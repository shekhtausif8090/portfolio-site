import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
