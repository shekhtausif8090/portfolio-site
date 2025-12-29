import { Code2, Palette, Layers } from "lucide-react";

export default function Summary() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda] font-mono text-xl">01.</span>
          About Me
          <div className="h-[1px] bg-gray-700 flex-1 ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-[#112240] rounded-lg border border-gray-800 hover:border-[#64ffda] transition-colors">
            <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mb-4">
              <Code2 className="text-[#64ffda]" size={32} />
            </div>
            <h3 className="text-[#ccd6f6] font-semibold text-lg mb-2">
              Frontend Developer
            </h3>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-[#112240] rounded-lg border border-gray-800 hover:border-[#64ffda] transition-colors">
            <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mb-4">
              <Palette className="text-[#64ffda]" size={32} />
            </div>
            <h3 className="text-[#ccd6f6] font-semibold text-lg mb-2">
              React Developer
            </h3>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-[#112240] rounded-lg border border-gray-800 hover:border-[#64ffda] transition-colors">
            <div className="w-16 h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mb-4">
              <Layers className="text-[#64ffda]" size={32} />
            </div>
            <h3 className="text-[#ccd6f6] font-semibold text-lg mb-2">
              UX Engineer
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <span className="text-[#ccd6f6] font-semibold">
                Hi. My name is Shekh Tausif
              </span>{" "}
              and I enjoy building things for the web. My journey in software
              development started when I discovered the power of React and
              modern web technologies.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fast-forward to today - I'm a professional{" "}
              <span className="text-[#64ffda]">
                Frontend Developer with 3+ years
              </span>{" "}
              of experience building production-grade UI at scale. I specialize
              in performance optimization, TypeScript, and clean architecture.
              I've reduced page load by 25%, improved engagement by 40%, and
              increased test coverage to 95%.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "GraphQL",
                "AWS",
                "PostgreSQL",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <span className="text-[#64ffda]">▹</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 border-2 border-[#64ffda] rounded-lg absolute top-4 left-4 group-hover:top-2 group-hover:left-2 transition-all"></div>
              <div className="w-64 h-64 bg-[#64ffda]/20 rounded-lg overflow-hidden relative z-10 group-hover:bg-[#64ffda]/10 transition-all">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
