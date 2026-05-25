const projects = [
  {
    title: "PennyWise – Personal Finance Management",
    description: "A full stack personal finance app that helps users track expenses, manage subscriptions, monitor budgets, and generate monthly financial reports through interactive dashboards and analytics.",
    tech: ["React.js", "Python Flask", "PostgreSQL", "JavaScript", "SQL"],
    github: "https://github.com/prateeksha-26/PennyWise",
    live: "#",
    features: ["Expense & transaction tracking", "Budget management", "Subscription monitoring", "Monthly financial reports"]
  },
  {
    title: "Campus Connect – Student Campus Platform",
    description: "A student-focused platform that combines food ordering, campus resource management, and a points-based rewards system into one modern, gamified experience.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/prateeksha-26",
    live: "#",
    features: ["Integrated food menu with points", "Campus resource tracking", "Gamified rewards system", "Modern UI with animations"]
  }
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-500 uppercase tracking-widest text-sm font-medium mb-2">What I've Built</p>
        <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-8 transition group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-5 leading-relaxed">{project.description}</p>
              <ul className="text-gray-500 text-sm mb-5 space-y-1">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-blue-500">▹</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-6">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm font-medium transition">
                  GitHub →
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm font-medium transition">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects