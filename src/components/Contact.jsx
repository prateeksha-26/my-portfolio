import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:prateeksha4688@gmail.com?subject=Message from ${form.name}&body=${form.message} (from ${form.email})`
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-500 uppercase tracking-widest text-sm font-medium mb-2">Contact</p>
        <h2 className="text-4xl font-bold text-white mb-12">Let's Build Your Next <br />
          <span className="text-blue-500">Breakthrough Together.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Info */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Reach Out</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm available for internships and full stack projects. 
              Feel free to reach out — let's connect!
            </p>
            <div className="flex items-center gap-4 text-gray-400 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl">
                <FaEnvelope className="text-blue-500 text-xl" />
              </div>
              <span>prateeksha4688@gmail.com</span>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/prateeksha-26" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-5 py-3 rounded-xl transition">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pratheeksha-v" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-5 py-3 rounded-xl transition">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-blue-500 text-white rounded-xl px-4 py-3 outline-none transition"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-blue-500 text-white rounded-xl px-4 py-3 outline-none transition"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 focus:border-blue-500 text-white rounded-xl px-4 py-3 outline-none transition resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition text-lg"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact