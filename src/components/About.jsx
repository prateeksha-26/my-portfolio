function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-500 uppercase tracking-widest text-sm font-medium mb-2">About Me</p>
          <h2 className="text-4xl font-bold text-white mb-6">Who I Am</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Hello! I'm Pratheeksha V, a 2nd year Computer Science Engineering student 
            with a passion for building full stack web applications that solve real problems.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm fascinated by how software works end to end — from designing clean UIs 
            to building robust backends and databases. I'm actively looking for internship 
            opportunities where I can grow, contribute and ship real products.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <div><span className="text-blue-500 font-semibold">Name:</span> Pratheeksha V</div>
            <div><span className="text-blue-500 font-semibold">Degree:</span> B.E CSE</div>
            <div><span className="text-blue-500 font-semibold">Year:</span> 2nd Year</div>
            <div><span className="text-blue-500 font-semibold">Location:</span> Bangalore, India</div>
            <div><span className="text-blue-500 font-semibold">Email:</span> prateeksha4688@gmail.com</div>
            <div><span className="text-blue-500 font-semibold">Status:</span> Open to Internships</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-blue-500/30">
              <img src="/Profile.jpeg" alt="Pratheeksha V" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 border-2 border-blue-500/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About