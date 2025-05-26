import { useState } from 'react'
import { FaUpload, FaFileAlt, FaTag, FaLink } from 'react-icons/fa'

export default function UploadCourse() {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: '',
    link: '',
  })

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Curso enviado:', course)
    // Aquí iría tu lógica para subirlo
  }

  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          <FaUpload className="inline mr-2 text-purple-600" />
          Subir nuevo curso
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaFileAlt className="inline mr-2 text-purple-600" />
              Título del curso
            </label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              placeholder="Ej: Fundamentos de barbería"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaFileAlt className="inline mr-2 text-purple-600" />
              Descripción
            </label>
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition resize-none"
              placeholder="Una breve descripción del curso..."
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaTag className="inline mr-2 text-purple-600" />
              Categoría
            </label>
            <input
              type="text"
              name="category"
              value={course.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              placeholder="Ej: Estilo, Técnica, Productos..."
            />
          </div>

          {/* Enlace del curso */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaLink className="inline mr-2 text-purple-600" />
              Enlace al curso
            </label>
            <input
              type="url"
              name="link"
              value={course.link}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              placeholder="https://tucurso.com"
            />
          </div>

          {/* Botón */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full transition shadow-md hover:shadow-xl"
            >
              Publicar Curso
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
