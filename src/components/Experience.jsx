import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Accenture (Cox Automotive)",
    period: "Sept 2024 – Present",
    achievements: [
      "Architected end-to-end alerting infrastructure using Terraform and AWS to monitor critical application errors affecting user experience on CAFS/Next Inspect platform",
      "Migrated monitoring from Datadog to New Relic and integrated alerts with PagerDuty notification workflows, enabling real-time critical incident escalation to TeamBarracuda operations team via Slack integration",
      "Created comprehensive dashboards in New Relic to track real-time error metrics, event distributions, and severity trends for proactive issue identification and troubleshooting",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Accenture (P&G)",
    period: "March 2022 – Present",
    achievements: [
      "Built reusable, responsive UI components with React.js, TypeScript, and Material UI, improving code maintainability by 30%",
      "Implemented Redux Toolkit and Context API for scalable state management across complex views",
      "Designed and developed the user interface ensuring a responsive design and intuitive user experience with an average 40% improvement in user engagement",
      "Collaborated closely with backend engineers and QA to integrate RESTful APIs and streamline data flow between frontend and backend systems",
      "Improved application performance by 25% through code-splitting, memoization, and lazy loading techniques",
      "Introduced unit and integration testing using Jest, Vitest, and React Testing Library, increasing code coverage to 95% and reducing production bugs by 50%",
      "Contributed to UI accessibility enhancements following WCAG 2.1 standards, ensuring inclusive user experiences",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIdx) => (
                  <li key={achIdx} className="flex gap-3 text-gray-700">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
