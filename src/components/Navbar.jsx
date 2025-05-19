// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-purple-500 tracking-wide"
        >
          BarberConnect
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/search"
            className="hover:text-purple-400 transition-colors"
          >
            Buscar Profesionales
          </Link>

          {/* Opcional dropdown de servicios */}
          <div className="relative">
            <button
              onClick={toggleServices}
              className="flex items-center space-x-1 hover:text-purple-400 transition-colors focus:outline-none"
              aria-expanded={servicesOpen}
            >
              <span>Servicios</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full mt-2 bg-black border border-gray-700 rounded-lg shadow-lg w-48 py-2"
              >
                <Link
                  to="/search?category=barberos"
                  className="block px-4 py-2 hover:bg-purple-700 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Barberos
                </Link>
                <Link
                  to="/search?category=peluqueros"
                  className="block px-4 py-2 hover:bg-purple-700 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Peluqueros
                </Link>
                <Link
                  to="/search?category=masajistas"
                  className="block px-4 py-2 hover:bg-purple-700 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Masajistas
                </Link>
                <Link
                  to="/search?category=tatuadores"
                  className="block px-4 py-2 hover:bg-purple-700 transition"
                  onClick={() => setServicesOpen(false)}
                >
                  Tatuadores
                </Link>
              </div>
            )}
          </div>

          <Link to="/login" className="hover:text-purple-400 transition-colors">
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
          >
            Soy Profesional
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 space-y-4 md:hidden flex flex-col items-start max-w-7xl mx-auto">
          <Link
            to="/search"
            className="text-white hover:text-purple-400 w-full"
            onClick={toggleMenu}
          >
            Buscar Profesionales
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center space-x-1 text-white hover:text-purple-400 w-full focus:outline-none"
            >
              <span>Servicios</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="mt-2 flex flex-col space-y-2 pl-4">
                <Link
                  to="/search?category=barberos"
                  className="hover:text-purple-400"
                  onClick={() => {
                    setServicesOpen(false)
                    toggleMenu()
                  }}
                >
                  Barberos
                </Link>
                <Link
                  to="/search?category=peluqueros"
                  className="hover:text-purple-400"
                  onClick={() => {
                    setServicesOpen(false)
                    toggleMenu()
                  }}
                >
                  Peluqueros
                </Link>
                <Link
                  to="/search?category=masajistas"
                  className="hover:text-purple-400"
                  onClick={() => {
                    setServicesOpen(false)
                    toggleMenu()
                  }}
                >
                  Masajistas
                </Link>
                <Link
                  to="/search?category=tatuadores"
                  className="hover:text-purple-400"
                  onClick={() => {
                    setServicesOpen(false)
                    toggleMenu()
                  }}
                >
                  Tatuadores
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="text-white hover:text-purple-400 w-full"
            onClick={toggleMenu}
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 w-full text-center"
            onClick={toggleMenu}
          >
            Soy Profesional
          </Link>
        </div>
      )}
    </nav>
  )
}
