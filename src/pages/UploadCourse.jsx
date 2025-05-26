import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUpload, FaFileAlt, FaTag, FaLink } from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function UploadCourse() {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: '',
    link: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Obtener cursos previos
    const existing = JSON.parse(localStorage.getItem('courses') || '[]')

    // Crear nuevo con id
    const newCourse = {
      ...course,
      id: Date.now(),
    }

    // Guardar en localStorage
    localStorage.setItem('courses', JSON.stringify([newCourse, ...existing]))

    // Redirigir al listado
    navigate('/courses')
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-100 text-gray-900 px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
          <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
            <FaUpload className="inline mr-2 text-purple-600" />
            Subir nuevo curso
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campos (idénticos a antes) */}
            <div>
              <label className="block mb-1 font-medium">Título</label>
              <input
                name="title"
                value={course.title}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Descripción</label>
              <textarea
                name="description"
                value={course.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border rounded-xl px-4 py-3 resize-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Categoría</label>
              <input
                name="category"
                value={course.category}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Enlace</label>
              <input
                name="link"
                type="url"
                value={course.link}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
            >
              Publicar Curso
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
