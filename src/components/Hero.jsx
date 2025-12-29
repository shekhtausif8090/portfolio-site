import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "React Developer", "UI Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl">
        <p className="text-[#64ffda] font-mono text-base md:text-lg mb-5">
          Hello. 👋
        </p>
        <p className="text-[#64ffda] font-mono text-base md:text-lg mb-5">
          My name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
          Shekh Tausif
        </h1>
        <div className="text-2xl md:text-4xl text-gray-400 mb-6 h-12 flex items-center font-mono">
          I'm a{" "}
          <span className="ml-3 text-[#64ffda] animate-pulse">
            {roles[currentRole]}
          </span>
        </div>
        <p className="text-gray-400 max-w-2xl mb-4 text-lg leading-relaxed">
          based in <span className="text-[#64ffda]">Pune, India!</span>
        </p>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-[#64ffda]">
            <span className="font-mono text-sm">SCROLL</span>
            <ArrowDown size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
