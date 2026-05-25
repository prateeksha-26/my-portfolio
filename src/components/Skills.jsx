const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Python Flask", "Node.js", "Express.js"]
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"]
  }
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-500 uppercase tracking-widest text-sm font-medium mb-2">What I Know</p>
        <h2 className="text-4xl font-bold text-white mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-blue-500 font-semibold text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="bg-gray-900 text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-white px-4 py-1.5 rounded-full text-sm transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills