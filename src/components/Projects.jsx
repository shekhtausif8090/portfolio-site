import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Notionesque",
      description:
        "Notion-style Productivity App with Kanban + List task views featuring drag-and-drop, advanced filtering, and localStorage-based persistence for seamless offline experience. Optimized state and rendering using Redux Toolkit + memoization.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/shekhtausif8090",
      live: "#",
      image: "📝",
    },
    {
      title: "Canvas Flow",
      description:
        "Multi-user real-time canvas with WebSockets and room-based collaboration. Implemented session management + reconnection logic ensuring zero data loss. PostgreSQL + Prisma for persistent, scalable data storage.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "WebSocket",
        "PostgreSQL",
        "Prisma",
      ],
      github: "https://github.com/shekhtausif8090",
      live: "#",
      image: "🎨",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda] font-mono text-xl">03.</span>
          Some Things I've Built
          <div className="h-[1px] bg-gray-700 flex-1 ml-4"></div>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:dir-rtl" : ""
              }`}
            >
              {/* Project Image */}
              <div className="md:col-span-7 relative group">
                <div className="relative bg-[#112240] rounded-lg overflow-hidden border border-gray-800 hover:border-[#64ffda] transition-all">
                  <div className="aspect-video flex items-center justify-center text-8xl bg-gradient-to-br from-[#64ffda]/20 to-[#112240]">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-[#64ffda]/10 group-hover:bg-transparent transition-all"></div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-5 relative ${
                  index % 2 === 1
                    ? "md:text-left md:items-start"
                    : "md:text-right md:items-end"
                } flex flex-col gap-4`}
              >
                <p className="text-[#64ffda] font-mono text-sm">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-[#ccd6f6]">
                  {project.title}
                </h3>

                <div className="bg-[#112240] p-6 rounded-lg shadow-lg border border-gray-800">
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div
                  className={`flex flex-wrap gap-3 font-mono text-sm text-gray-400 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#64ffda] transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#ccd6f6] text-center mb-12">
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#112240] p-6 rounded-lg border border-gray-800 hover:border-[#64ffda] hover:transform hover:-translate-y-2 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="text-[#64ffda]" size={40} />
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/shekhtausif8090"
                      className="text-gray-400 hover:text-[#64ffda] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h4 className="text-[#ccd6f6] font-semibold text-lg mb-2 group-hover:text-[#64ffda] transition-colors">
                  Project {item}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Additional projects coming soon. Check out my GitHub for more
                  work!
                </p>

                <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-400">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/shekhtausif8090?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-all font-mono"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
