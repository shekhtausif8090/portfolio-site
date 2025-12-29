import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Accenture (P&G)",
      role: "Frontend Developer",
      period: "March 2022 - Present",
      url: "https://www.accenture.com",
      points: [
        "Built reusable, responsive UI components with React.js, TypeScript, and Material UI, improving code maintainability by 30%",
        "Implemented Redux Toolkit and Context API for scalable state management across complex views",
        "Designed and developed the user interface ensuring a responsive design and intuitive user experience with an average 40% improvement in user engagement",
        "Collaborated closely with backend engineers and QA to integrate RESTful APIs and streamline data flow between frontend and backend systems",
        "Improved application performance by 25% through code-splitting, memoization, and lazy loading techniques",
        "Introduced unit and integration testing using Jest, Vitest, and React Testing Library, increasing code coverage to 95% and reducing production bugs by 50%",
        "Contributed to UI accessibility enhancements following WCAG 2.1 standards, ensuring inclusive user experiences",
      ],
      tech: [
        "React.js",
        "TypeScript",
        "Material UI",
        "Redux Toolkit",
        "Jest",
        "Vitest",
      ],
    },
    {
      company: "Accenture (Cox Automotive)",
      role: "Fullstack Developer",
      period: "Sept 2024 - Present",
      url: "https://www.accenture.com",
      points: [
        "Architected end-to-end alerting infrastructure using Terraform and AWS to monitor critical application errors affecting user experience on CAFS/Next Inspect platform",
        "Migrated monitoring from Datadog to New Relic and integrated alerts with PagerDuty notification workflows, enabling real-time critical incident escalation to TeamBarracuda operations team via Slack integration",
        "Created comprehensive dashboards in New Relic to track real-time error metrics, event distributions, and severity trends for proactive issue identification and troubleshooting",
      ],
      tech: ["Terraform", "AWS", "New Relic", "PagerDuty", "Slack API"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda] font-mono text-xl">02.</span>
          Where I've Worked
          <div className="h-[1px] bg-gray-700 flex-1 ml-4"></div>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab buttons */}
          <div className="flex md:flex-col gap-2 border-b md:border-b-0 md:border-l-2 border-gray-700 overflow-x-auto md:overflow-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-left font-mono text-sm whitespace-nowrap md:whitespace-normal transition-all border-b-2 md:border-b-0 md:border-l-2 ${
                  activeTab === index
                    ? "text-[#64ffda] border-[#64ffda] bg-[#112240]/50"
                    : "text-gray-400 border-transparent hover:bg-[#112240]/30 hover:text-[#64ffda]"
                }`}
              >
                {exp.company.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1">
            <h3 className="text-xl text-[#ccd6f6] mb-2">
              {experiences[activeTab].role}
              <a
                href={experiences[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] ml-2 inline-flex items-center hover:underline"
              >
                @ {experiences[activeTab].company}
                <ExternalLink size={16} className="ml-1" />
              </a>
            </h3>
            <p className="text-gray-400 font-mono text-sm mb-6">
              {experiences[activeTab].period}
            </p>

            <ul className="space-y-4 mb-6">
              {experiences[activeTab].points.map((point, index) => (
                <li key={index} className="flex gap-3 text-gray-400">
                  <span className="text-[#64ffda] mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              <p className="text-[#ccd6f6] font-semibold w-full mb-2">
                Tools & Technologies:
              </p>
              {experiences[activeTab].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#112240] text-[#64ffda] rounded-full text-sm border border-[#64ffda]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
