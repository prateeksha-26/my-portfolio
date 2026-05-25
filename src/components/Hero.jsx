import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-500">Pratheeksha</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Design. Code. Create. — I build clean, fast, full stack web apps 
          and love turning ideas into real products.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition">
            Get In Touch
          </a>
        </div>
        <div className="flex gap-6 justify-center text-2xl text-gray-400">
          <a href="https://github.com/prateeksha-26" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pratheeksha-v" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href="mailto:prateeksha4688@gmail.com" className="hover:text-white transition"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero