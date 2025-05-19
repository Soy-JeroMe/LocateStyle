import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [notification, setNotification] = useState(null) // { type, message }
  const navigate = useNavigate()

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    )

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      setNotification({
        type: 'success',
        message: `Bienvenido, ${user.name || user.email}!`,
      })
      setTimeout(() => {
        setNotification(null)

        // 🔁 Redirigir según el rol
        if (user.role === 'profesional') {
          navigate('/')
        } else {
          navigate('/')
        }
      }, 2000)
    } else {
      setError('Correo o contraseña incorrectos')
    }
  }

  return (
    <>
      {/* Notificación toast */}
      {notification && (
        <div
          className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-opacity
          ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
          role="alert"
        >
          {notification.message}
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 flex items-center justify-center font-sans text-white px-4">
        <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-purple-600 p-10 space-y-8">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg text-center">
            Bienvenido de nuevo
          </h2>
          <p className="text-purple-300 text-center text-lg">
            Ingresa tus datos para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-purple-300 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-purple-300 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm font-semibold">{error}</p>
            )}

            <button
              type="submit"
              disabled={!form.email || !form.password}
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold transition disabled:opacity-40"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="text-purple-300 text-center text-sm">
            ¿No tienes cuenta?{' '}
            <Link
              to="/register"
              className="text-purple-400 underline hover:text-purple-200"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
