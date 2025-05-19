// src/pages/Search.jsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BarberCard from '../components/BarberCard'

const fakeProfessionals = [
  {
    id: 1,
    name: 'Carlos Barber',
    services: ['Corte', 'Afeitado', 'Tinte'],
    photo:
      'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D',
    location: 'Ciudad de México',
    category: 'barberos',
  },
  {
    id: 2,
    name: 'Barbería Estilo',
    services: ['Corte', 'Barba'],
    photo:
      'https://media.istockphoto.com/id/1981992222/es/foto/barber%C3%ADa-o-barber%C3%ADa-peluquer%C3%ADa-de-dise%C3%B1o-vintage-vac%C3%ADa-con-dos-sillas-y-dos-espejos-y.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rf_IgqSxVAyUT40maMZ7aoIOtLcAtoxvXZ_2y4OxhFs=',
    location: 'Guadalajara',
    category: 'barberos',
  },
  {
    id: 3,
    name: 'Peluquería Moderna',
    services: ['Peinado', 'Coloración'],
    photo:
      'https://media.istockphoto.com/id/2150776419/es/foto/woman-at-the-hair-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=efPu0yCQFjSjtDf7DvP7_hdUkER8eNwswgLFCHKwAG0=',
    location: 'Monterrey',
    category: 'peluqueros',
  },
  {
    id: 4,
    name: 'Relajarte Masajes',
    services: ['Masaje relajante', 'Terapia corporal'],
    photo:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hc2FqZXN8ZW58MHx8MHx8fDA%3D',
    location: 'Ciudad de México',
    category: 'masajistas',
  },
  {
    id: 5,
    name: 'Arte en Tinta',
    services: ['Tatuajes personalizados'],
    photo:
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dWFqZXN8ZW58MHx8MHx8fDA%3D',
    location: 'Guadalajara',
    category: 'tatuadores',
  },
]
const categories = [
  { key: '', label: 'Todos' },
  { key: 'barberos', label: 'Barberos' },
  { key: 'peluqueros', label: 'Peluqueros' },
  { key: 'masajistas', label: 'Masajistas' },
  { key: 'tatuadores', label: 'Tatuadores' },
]

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || ''
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(categoryParam)
  const [filteredPros, setFilteredPros] = useState(fakeProfessionals)

  useEffect(() => {
    setCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    let filtered = fakeProfessionals

    if (category) {
      filtered = filtered.filter((p) => p.category === category)
    }

    if (query.trim() !== '') {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.location.toLowerCase().includes(query.toLowerCase()) ||
          p.services.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      )
    }

    setFilteredPros(filtered)
  }, [query, category])

  const handleCategoryChange = (key) => {
    setCategory(key)
    if (key) {
      setSearchParams({ category: key })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-purple-900 text-white font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-12 text-center">
          Encuentra Profesionales Cerca de Ti
        </h1>

        {/* Filtros y Búsqueda */}
        <section className="flex flex-col md:flex-row items-stretch gap-4 mb-16">
          <div className="flex flex-grow shadow-lg rounded-xl overflow-hidden">
            <input
              type="text"
              placeholder="Buscar por nombre, servicio o ubicación..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow px-5 py-3 bg-purple-900 text-white placeholder-purple-400 border border-r-0 border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-l-xl"
              autoComplete="off"
            />
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="bg-purple-900 border border-purple-700 text-purple-300 font-semibold px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-r-xl"
            >
              {categories.map(({ key, label }) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Resultados y mapa */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Resultados */}
          <div className="lg:col-span-2 space-y-6">
            {filteredPros.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPros.map((pro) => (
                  <BarberCard key={pro.id} barber={pro} />
                ))}
              </div>
            ) : (
              <div className="text-center text-purple-300 text-lg mt-20">
                No se encontraron profesionales para esta búsqueda.
              </div>
            )}
          </div>

          {/* Mapa placeholder */}
          <div className="hidden lg:flex flex-col items-center justify-start bg-purple-900/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-purple-700">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Mapa (próximamente)
            </h2>
            <div className="w-full h-96 bg-purple-950 rounded-xl flex items-center justify-center text-purple-500 font-medium">
              Aquí se mostrará un mapa interactivo
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
