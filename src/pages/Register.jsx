// src/pages/Register.jsx
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 flex items-center justify-center font-sans text-white">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white bg-opacity-5 backdrop-blur-xl border border-purple-500/30">
        {/* Lado visual / frase */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-b from-purple-800/60 to-purple-950/60">
          <div>
            <h2 className="text-4xl font-extrabold drop-shadow mb-6">
              ¡Únete a los mejores!
            </h2>
            <p className="text-purple-200 text-lg leading-relaxed">
              Conecta con cientos de clientes que buscan tus servicios cada día.
              Sé parte de la revolución del bienestar y estilo.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=700&q=80"
            alt="Profesional trabajando"
            className="rounded-xl mt-10 shadow-xl object-cover h-64 w-full"
            loading="lazy"
          />
        </div>

        {/* Formulario */}
        <div className="p-10 md:p-14 space-y-8">
          <h2 className="text-3xl font-bold text-black">
            Crea tu cuenta profesional
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-purple-600 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-sm text-purple-200 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm text-purple-200 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-3 rounded-xl font-semibold shadow-lg"
            >
              Registrarse
            </button>
          </form>
          <p className="text-purple-300 text-sm text-center">
            ¿Ya tienes cuenta?{' '}
            <Link
              to="/login"
              className="text-purple-400 hover:text-purple-200 underline"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
