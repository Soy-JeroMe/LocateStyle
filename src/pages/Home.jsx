import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const services = [
  {
    name: 'Barberos',
    description: 'Cortes, afeitados y estilos clásicos y modernos.',
    image:
      'https://plus.unsplash.com/premium_photo-1677444546747-ac6ecbf08945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyb3N8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Peluqueros',
    description: 'Peinados, coloraciones y tratamientos capilares.',
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmVyb3N8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Masajistas',
    description: 'Relajación, terapias y bienestar corporal.',
    image:
      'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hc2FqaXN0YXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Tatuadores',
    description: 'Arte corporal con diseños personalizados.',
    image:
      'https://images.unsplash.com/photo-1724343163782-52276ca2e6c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dWFkb3Jlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-purple-900 text-white font-sans scroll-smooth">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-xl">
            Encuentra al profesional ideal <br /> cerca de ti
          </h1>
          <p className="text-lg text-purple-300 max-w-md">
            Barberos, peluqueros, masajistas, tatuadores y más, todos en un solo
            lugar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/search"
              className="bg-white text-purple-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
            >
              Buscar profesionales
            </Link>
            <Link
              to="/register"
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-800 transition duration-300"
            >
              Únete como profesional
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=90"
            alt="Profesionales"
            className="rounded-3xl shadow-2xl w-full max-h-[450px] object-cover"
          />
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-purple-300 drop-shadow">
          Servicios destacados
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {services.map(({ name, description, image }) => (
            <div
              key={name}
              className="group relative bg-gradient-to-br from-purple-900/90 to-black/80 rounded-3xl shadow-xl overflow-hidden border border-purple-700 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition">
                  {name}
                </h3>
                <p className="text-sm text-purple-300 leading-snug">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-purple-300 drop-shadow">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: 'Fácil de usar',
              desc: 'Encuentra y agenda con profesionales cerca de ti en segundos.',
            },
            {
              title: 'Conexión directa',
              desc: 'Sin intermediarios, contacto directo con los profesionales.',
            },
            {
              title: 'Calidad garantizada',
              desc: 'Opiniones reales de usuarios y calificaciones verificadas.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-purple-900/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-purple-700 hover:bg-purple-800/80 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-purple-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-purple-300 drop-shadow">
          ¿Cómo funciona?
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Busca profesionales',
              desc: 'Encuentra según ubicación, especialidad o preferencias.',
            },
            {
              step: '2',
              title: 'Agenda tu cita',
              desc: 'Reserva rápidamente el día y hora que prefieras.',
            },
            {
              step: '3',
              title: 'Disfruta tu servicio',
              desc: 'Relájate y recibe atención personalizada.',
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-purple-900/70 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-purple-700 flex flex-col items-center hover:bg-purple-800/80 transition-colors"
            >
              <div className="text-5xl font-black text-purple-300 mb-4">
                {step}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-purple-300 text-sm max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-950 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">¿Eres profesional?</h2>
        <p className="text-purple-300 mb-10 max-w-xl mx-auto">
          Regístrate en la plataforma, crea tu perfil y empieza a recibir
          clientes hoy mismo.
        </p>
        <Link
          to="/register"
          className="inline-block bg-white text-purple-800 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-purple-100 transition"
        >
          Regístrate ahora
        </Link>
      </section>
    </div>
  )
}
