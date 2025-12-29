export default function Summary() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          About Me
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            Frontend Developer (React + Next.js) with{" "}
            <span className="font-semibold text-primary">3+ years</span>{" "}
            building production-grade UI at scale. Specialized in performance
            optimization, TypeScript, and clean architecture. Reduced page load
            by <span className="font-semibold text-primary">25%</span>, improved
            engagement by{" "}
            <span className="font-semibold text-primary">40%</span>, and
            increased test coverage to{" "}
            <span className="font-semibold text-primary">95%</span>. Experienced
            in React Server Components, modern state management, and building
            dashboards, complex forms, real-time apps, and large enterprise UI
            systems.
          </p>
        </div>
      </div>
    </section>
  );
}
