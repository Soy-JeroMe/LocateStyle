import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserEdit,
} from 'react-icons/fa'

export default function ProfileProfessional() {
  const [user, setUser] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: '',
  })
  const [isEditing, setIsEditing] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (storedUser) {
      setUser(storedUser)
      setForm({
        name: storedUser.name || '',
        email: storedUser.email || '',
        phone: storedUser.phone || '',
        location: storedUser.location || '',
        description: storedUser.description || '',
      })
    }
  }, [])

  const handleChange = (field, value) => {
    if (isEditing) {
      setForm((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleSave = () => {
    const updatedUser = { ...user, ...form }
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser))
    setUser(updatedUser)
    setIsEditing(false)
    setShowNotification(true)
    window.dispatchEvent(new Event('storage')) // Actualiza Navbar

    setTimeout(() => {
      setShowNotification(false)
      window.location.reload() // 🔄 Recarga la página
    }, 1500)
  }

  const handleCancel = () => {
    setForm({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      location: user.location || '',
      description: user.description || '',
    })
    setIsEditing(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        Cargando perfil...
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black font-sans px-6 py-16">
        <div className="max-w-4xl mx-auto bg-neutral-100 rounded-3xl border border-neutral-300 shadow-xl p-10 relative">
          {showNotification && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-2.5rem] bg-green-100 border border-green-300 text-green-800 px-6 py-3 rounded-xl shadow-md transition">
              ✅ Perfil actualizado correctamente.
            </div>
          )}

          <h1 className="text-4xl font-bold text-purple-700 mb-10 text-center">
            Tu Perfil Profesional
          </h1>

          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-5xl font-bold shadow-inner border-4 border-purple-200">
                {form.name?.charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <FaUserEdit className="text-purple-600" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  disabled={!isEditing}
                  className={`w-full bg-white border-b-2 ${
                    isEditing
                      ? 'border-purple-300 focus:outline-none focus:border-purple-600'
                      : 'border-transparent text-gray-700'
                  } transition px-2 py-1 rounded`}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="flex items-center gap-3 text-lg">
                <FaEnvelope className="text-purple-600" />
                <span className="text-gray-600">{form.email}</span>
              </div>

              <div className="flex items-center gap-3 text-lg">
                <FaPhoneAlt className="text-purple-600" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  disabled={!isEditing}
                  className={`w-full bg-white border-b-2 ${
                    isEditing
                      ? 'border-purple-300 focus:outline-none focus:border-purple-600'
                      : 'border-transparent text-gray-700'
                  } transition px-2 py-1 rounded`}
                  placeholder="Tu número de contacto"
                />
              </div>

              <div className="flex items-center gap-3 text-lg">
                <FaMapMarkerAlt className="text-purple-600" />
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  disabled={!isEditing}
                  className={`w-full bg-white border-b-2 ${
                    isEditing
                      ? 'border-purple-300 focus:outline-none focus:border-purple-600'
                      : 'border-transparent text-gray-700'
                  } transition px-2 py-1 rounded`}
                  placeholder="Ubicación"
                />
              </div>
            </div>
          </section>

          <section className="mt-10">
            <label className="block text-purple-700 font-semibold mb-2 text-lg">
              Descripción de tu servicio
            </label>
            <textarea
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              disabled={!isEditing}
              rows="5"
              className={`w-full rounded-xl p-4 transition ${
                isEditing
                  ? 'bg-white border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800'
                  : 'bg-transparent text-gray-700 border-transparent'
              }`}
              placeholder="Describe brevemente tu experiencia, servicios ofrecidos o lo que te hace único..."
            />
          </section>

          <div className="mt-10 text-center space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition"
                >
                  Guardar Cambios
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-8 py-3 rounded-xl font-semibold transition"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-xl font-semibold transition"
              >
                Editar Perfil
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
