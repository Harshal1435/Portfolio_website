import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"

function Header({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-150 bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          Harshal Raghatate
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-secondary text-secondary-foreground focus:outline-none"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="md:hidden ml-4">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background py-2"
        >
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>
            Skills
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground transition duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Header

