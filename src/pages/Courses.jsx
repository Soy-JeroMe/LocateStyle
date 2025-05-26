import { useEffect, useState } from 'react'
import { FaPlayCircle, FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses') || '[]')
    setCourses(storedCourses)
  }, [])

  return (
    <>
      <Navbar />

      {/* Sección de introducción */}
      <div className="bg-purple-800 py-20 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Explora y Comparte Conocimiento
          </h1>
          <p className="text-lg text-black font-bold leading-relaxed">
            Esta plataforma permite a usuarios subir y descubrir cursos creados
            por otros miembros de la comunidad. Comparte tu experiencia, aprende
            nuevas habilidades o encuentra ese curso que estabas buscando. ¡Todo
            en un solo lugar!
          </p>
        </div>
      </div>

      {/* Sección de cursos */}
      <div className="min-h-screen bg-neutral-100 px-6 py-20 font-sans relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">
              🎓 Cursos Disponibles
            </h2>
          </div>

          {courses.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Aún no hay cursos disponibles. Sé el primero en subir uno.
            </p>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-1"
                >
                  <div className="h-40 bg-gradient-to-tr from-purple-400 via-pink-300 to-indigo-400 group-hover:blur-[1px] transition" />

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                        {course.category}
                      </span>

                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold text-sm transition"
                      >
                        <FaPlayCircle className="text-lg" />
                        Ver Curso
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botón flotante para subir curso */}
        <button
          onClick={() => navigate('/subir-curso')}
          className="fixed bottom-10 right-10 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition z-50"
        >
          <FaPlus />
          Subir Curso
        </button>
      </div>
    </>
  )
}
