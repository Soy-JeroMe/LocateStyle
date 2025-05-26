import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUpload,
  FaFileAlt,
  FaTag,
  FaLink,
  FaHeading,
  FaImage,
} from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function UploadCourse() {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: '',
    link: '',
    image: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCourse((prev) => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existing = JSON.parse(localStorage.getItem('courses') || '[]')
    const newCourse = { ...course, id: Date.now() }
    localStorage.setItem('courses', JSON.stringify([newCourse, ...existing]))
    navigate('/courses')
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100 px-6 py-16 text-gray-900 font-sans">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
            <FaUpload className="text-purple-600" />
            Publicar Nuevo Curso
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Título */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-sm text-gray-700">
                Título del Curso
              </label>
              <div className="relative">
                <FaHeading className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="title"
                  value={course.title}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Introducción a la peluquería"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Descripción */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-sm text-gray-700">
                Descripción
              </label>
              <div className="relative">
                <FaFileAlt className="absolute left-3 top-3.5 text-gray-400" />
                <textarea
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Describe el contenido del curso..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition resize-none"
                />
              </div>
            </div>

            {/* Categoría */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-sm text-gray-700">
                Categoría
              </label>
              <div className="relative">
                <FaTag className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                  required
                  placeholder="Ej: dseño de uñas, corte de cabello"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Link */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-sm text-gray-700">
                Enlace del Curso
              </label>
              <div className="relative">
                <FaLink className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="link"
                  type="url"
                  value={course.link}
                  onChange={handleChange}
                  required
                  placeholder="https://..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Imagen */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-sm text-gray-700">
                Imagen de Portada
              </label>
              <div className="relative flex items-center gap-3">
                <FaImage className="text-gray-400 text-lg" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>
              {course.image && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Previsualización:
                  </p>
                  <img
                    src={course.image}
                    alt="Previsualización"
                    className="w-full rounded-xl shadow-md border"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-purple-700 hover:bg-purple-800 text-white text-lg font-bold py-3 rounded-full shadow-lg transition"
            >
              Publicar Curso
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
