import {
  Code,
  Paintbrush,
  Server,
  Cloud,
  Database,
  TestTube,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "React.js",
      "Next.js (App Router, SSR, ISR)",
      "TypeScript",
      "JavaScript (ES6+)",
      "React Query (TanStack Query)",
      "Redux Toolkit",
      "Zustand",
      "Context API",
    ],
    color: "bg-blue-500",
  },
  {
    title: "UI / Styling",
    icon: Paintbrush,
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "Responsive Design",
    ],
    color: "bg-purple-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    color: "bg-green-500",
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS (S3, Lambda)"],
    color: "bg-orange-500",
  },
  {
    title: "Database / Tools",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Git",
      "WebSocket",
      "CI/CD (GitHub Actions)",
    ],
    color: "bg-cyan-500",
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Vitest", "Jest", "React Testing Library", "Playwright"],
    color: "bg-pink-500",
  },
  {
    title: "Other",
    icon: Shield,
    skills: [
      "Accessibility (WCAG 2.1)",
      "Performance Optimization (Core Web Vitals)",
      "Agile/Scrum",
    ],
    color: "bg-indigo-500",
  },
];

export default function Skills() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Core Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
