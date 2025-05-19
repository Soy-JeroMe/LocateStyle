// src/pages/Login.jsx
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-800 flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-lg border border-purple-500 rounded-3xl shadow-2xl p-10 max-w-md w-full space-y-6 text-white">
        <h1 className="text-4xl font-extrabold text-center drop-shadow-lg">
          ¡Bienvenido de nuevo!
        </h1>
        <p className="text-purple-200 text-center text-sm">
          Conéctate con los mejores profesionales cerca de ti.
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-purple-300 mb-1"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-xl bg-white/10 border border-purple-500 placeholder-purple-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-purple-300 mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-xl bg-white/10 border border-purple-500 placeholder-purple-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-purple-800 font-bold py-3 rounded-xl shadow-md hover:bg-purple-100 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-sm text-purple-300">
          ¿No tienes cuenta?{' '}
          <Link
            to="/register"
            className="text-white underline hover:text-purple-200"
          >
            Regístrate ahora
          </Link>
        </p>
      </div>
    </div>
  )
}
