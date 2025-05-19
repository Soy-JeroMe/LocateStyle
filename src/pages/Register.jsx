import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    profession: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'cliente', // cliente o profesional
  })
  const [error, setError] = useState('')
  const [notification, setNotification] = useState(null) // { type, message }
  const navigate = useNavigate()

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    if (users.some((u) => u.email === form.email)) {
      setError('Este correo ya está registrado')
      return
    }

    const newUser = {
      name: form.name,
      profession: form.profession,
      email: form.email,
      password: form.password,
      role: form.role,
    }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    setNotification({
      type: 'success',
      message: 'Registro exitoso! Ahora puedes iniciar sesión.',
    })
    setTimeout(() => {
      setNotification(null)
      navigate('/login')
    }, 3000)
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
        <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-purple-600">
          <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-b from-purple-900/70 to-black/80">
            <div>
              <h2 className="text-4xl font-extrabold mb-4 drop-shadow">
                ¡Haz crecer tu marca!
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed">
                Regístrate como profesional o cliente y empieza a conectar con
                otros.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=800&q=80"
              alt="Profesional trabajando"
              className="rounded-xl mt-10 shadow-lg object-cover h-64 w-full"
              loading="lazy"
            />
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-bold text-white drop-shadow mb-2">
              {step === 1 ? 'Información personal' : 'Detalles de cuenta'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm text-purple-300 mb-1">
                      ¿Qué tipo de usuario eres?
                    </label>
                    <select
                      value={form.role}
                      onChange={(e) => handleChange('role', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="cliente">Cliente</option>
                      <option value="profesional">Profesional</option>
                    </select>
                  </div>

                  {form.role === 'profesional' && (
                    <>
                      <div>
                        <label className="block text-sm text-purple-300 mb-1">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Ej. Ana Torres"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-purple-300 mb-1">
                          Profesión
                        </label>
                        <select
                          value={form.profession}
                          onChange={(e) =>
                            handleChange('profession', e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="barbero">Barbero</option>
                          <option value="peluquero">Peluquero</option>
                          <option value="masajista">Masajista</option>
                          <option value="tatuador">Tatuador</option>
                        </select>
                      </div>
                    </>
                  )}

                  {form.role === 'cliente' && (
                    <div>
                      <label className="block text-sm text-purple-300 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Ej. Carlos Pérez"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      !form.name ||
                      (form.role === 'profesional' && !form.profession)
                    }
                    className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold transition disabled:opacity-40"
                  >
                    Siguiente
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="block text-sm text-purple-300 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-purple-300 mb-1">
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      value={form.confirmPassword}
                      onChange={(e) =>
                        handleChange('confirmPassword', e.target.value)
                      }
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-purple-300 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm font-semibold">
                      {error}
                    </p>
                  )}

                  <div className="flex justify-between gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-full border border-purple-400 py-3 rounded-xl hover:bg-purple-800 transition"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={
                        !form.email ||
                        !form.password ||
                        form.password !== form.confirmPassword
                      }
                      className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold transition disabled:opacity-40"
                    >
                      Registrarse
                    </button>
                  </div>
                </>
              )}
            </form>

            <p className="text-purple-300 text-sm text-center">
              ¿Ya tienes una cuenta?{' '}
              <Link
                to="/login"
                className="text-purple-400 underline hover:text-purple-200"
              >
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
