import { FaPlayCircle, FaUserGraduate } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 1,
    title: 'Curso de Corte Moderno',
    instructor: 'Luis Martínez',
    image: 'https://source.unsplash.com/400x250/?barber,haircut',
    description:
      'Aprende las técnicas más populares de corte moderno en este curso completo de 4 semanas.',
  },
  {
    id: 2,
    title: 'Barbería Clásica Avanzada',
    instructor: 'Ana Torres',
    image: 'https://source.unsplash.com/400x250/?barbershop,classic',
    description:
      'Domina el arte del afeitado y corte clásico con técnicas tradicionales y herramientas vintage.',
  },
  {
    id: 3,
    title: 'Diseños Capilares Creativos',
    instructor: 'Carlos Ruiz',
    image: 'https://source.unsplash.com/400x250/?hairdesign',
    description:
      'Explora el diseño capilar como arte, desde patrones básicos hasta creaciones avanzadas.',
  },
]

export default function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Cursos de Barbería</h1>
            <p className="text-lg text-neutral-600">
              Explora o comparte cursos sobre técnicas, estilos y herramientas
              del mundo barberil.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition border border-neutral-200 group"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between h-[260px]">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-800 mb-2">
                      {course.title}
                    </h2>
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-700 font-medium">
                      <FaUserGraduate />
                      {course.instructor}
                    </div>
                  </div>

                  <button className="mt-5 w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-full flex items-center justify-center gap-2 transition">
                    <FaPlayCircle />
                    Ver Curso
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sección para subir curso (placeholder) */}
          <div className="mt-20 text-center">
            <p className="text-neutral-600 mb-4">
              ¿Tienes conocimientos que compartir?
            </p>
            <Link
              to="/subir-curso"
              className="mt-4 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition font-semibold shadow"
            >
              Subir un nuevo curso
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
