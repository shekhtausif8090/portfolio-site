import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>

        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                BE in Computer Engineering
              </h3>
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <GraduationCap size={20} />
                <span>Savitribai Phule Pune University</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin size={18} />
                <span>Pune, India</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
              <Calendar size={18} />
              <span>Aug 2017 – June 2021</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4">
            <p className="text-lg font-semibold text-gray-900">
              CGPA: <span className="text-primary">8.0</span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <BookOpen className="text-primary mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Math",
                  "Algorithms",
                  "Microprocessor",
                  "Web Technology",
                  "DBMS",
                  "Machine Learning",
                ].map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
