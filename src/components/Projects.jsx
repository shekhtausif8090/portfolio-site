import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Notionesque",
    subtitle: "Notion-style Productivity App",
    description: [
      "Built Kanban + List task views with drag-and-drop and advanced filtering",
      "Implemented localStorage-based persistence for seamless offline experience",
      "Optimized state and rendering using Redux Toolkit + memoization for faster interactions",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    githubLink: "https://github.com/shekhtausif8090",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Canvas Flow",
    subtitle: "Real-time Collaborative Canvas",
    description: [
      "Built multi-user real-time canvas with WebSockets and room-based collaboration",
      "Implemented session management + reconnection logic ensuring zero data loss",
      "Used PostgreSQL + Prisma for persistent, scalable data storage",
    ],
    tech: ["React", "Node.js", "Express", "WebSocket", "PostgreSQL", "Prisma"],
    githubLink: "https://github.com/shekhtausif8090",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Projects() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {project.subtitle}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.description.map((item, descIdx) => (
                    <li key={descIdx} className="flex gap-3 text-gray-700">
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all transform group-hover:scale-105"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
