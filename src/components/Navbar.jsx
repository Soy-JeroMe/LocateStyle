import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, User } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const fetchUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'))
    setUser(loggedUser)
  }

  useEffect(() => {
    fetchUser()

    const handleStorage = (e) => {
      if (e.key === 'loggedInUser') {
        fetchUser()
      }
    }

    const handleUserUpdate = () => fetchUser()

    window.addEventListener('storage', handleStorage)
    window.addEventListener('user-updated', handleUserUpdate)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('user-updated', handleUserUpdate)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)
  const toggleProfile = () => setProfileOpen(!profileOpen)

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-purple-500 tracking-wide"
          onClick={() => {
            setIsOpen(false)
            setProfileOpen(false)
            setServicesOpen(false)
          }}
        >
          LocateStyle
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/search"
            className="hover:text-purple-400 transition-colors"
          >
            Buscar Profesionales
          </Link>

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

          {!user ? (
            <>
              <Link
                to="/login"
                className="hover:text-purple-400 transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
              >
                Registrate
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-2 hover:text-purple-400 focus:outline-none"
                aria-expanded={profileOpen}
              >
                <User className="w-5 h-5" />
                <span>{user.name || user.email}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {profileOpen && (
                <div
                  onMouseLeave={() => setProfileOpen(false)}
                  className="absolute right-0 top-full mt-2 bg-black border border-gray-700 rounded-lg shadow-lg w-48 py-2"
                >
                  {user.role === 'profesional' ? (
                    <>
                      <Link
                        to="/profile/professional"
                        className="block px-4 py-2 hover:bg-purple-700 transition"
                        onClick={() => setProfileOpen(false)}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        to="/appointments"
                        className="block px-4 py-2 hover:bg-purple-700 transition"
                        onClick={() => setProfileOpen(false)}
                      >
                        Mis Citas
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/profile/client"
                        className="block px-4 py-2 hover:bg-purple-700 transition"
                        onClick={() => setProfileOpen(false)}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        to="/bookings"
                        className="block px-4 py-2 hover:bg-purple-700 transition"
                        onClick={() => setProfileOpen(false)}
                      >
                        Mis Reservas
                      </Link>
                    </>
                  )}
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-purple-700 transition"
                    onClick={() => setProfileOpen(false)}
                  >
                    Configuración
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setProfileOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-red-600 text-red-400 font-semibold transition"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Botón hamburguesa para móvil */}
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

      {/* Menú móvil */}
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

          {!user ? (
            <>
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
                Registrate
              </Link>
            </>
          ) : (
            <div className="w-full">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-2 text-white hover:text-purple-400 focus:outline-none w-full"
              >
                <User className="w-5 h-5" />
                <span>{user.name || user.email}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {profileOpen && (
                <div className="mt-2 flex flex-col space-y-2 pl-4 bg-black border border-gray-700 rounded-lg py-2 w-full">
                  {user.role === 'profesional' ? (
                    <>
                      <Link
                        to="/profile/professional"
                        className="hover:text-purple-400"
                        onClick={() => {
                          setProfileOpen(false)
                          toggleMenu()
                        }}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        to="/appointments"
                        className="hover:text-purple-400"
                        onClick={() => {
                          setProfileOpen(false)
                          toggleMenu()
                        }}
                      >
                        Mis Citas
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/profile/client"
                        className="hover:text-purple-400"
                        onClick={() => {
                          setProfileOpen(false)
                          toggleMenu()
                        }}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        to="/bookings"
                        className="hover:text-purple-400"
                        onClick={() => {
                          setProfileOpen(false)
                          toggleMenu()
                        }}
                      >
                        Mis Reservas
                      </Link>
                    </>
                  )}
                  <Link
                    to="/settings"
                    className="hover:text-purple-400"
                    onClick={() => {
                      setProfileOpen(false)
                      toggleMenu()
                    }}
                  >
                    Configuración
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setProfileOpen(false)
                      toggleMenu()
                    }}
                    className="text-red-400 font-semibold hover:text-red-600 text-left"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
