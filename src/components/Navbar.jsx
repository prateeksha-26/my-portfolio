import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Pratheeksha<span className="text-blue-500">.V</span>
        </h1>
        <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition">{item}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-gray-400 hover:text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-400 font-medium bg-gray-950">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar