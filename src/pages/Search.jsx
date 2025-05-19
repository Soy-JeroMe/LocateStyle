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
    photo: 'https://source.unsplash.com/random/300x200?barber',
    location: 'Ciudad de México',
    category: 'barberos',
  },
  {
    id: 2,
    name: 'Barbería Estilo',
    services: ['Corte', 'Barba'],
    photo: 'https://source.unsplash.com/random/301x201?barbershop',
    location: 'Guadalajara',
    category: 'barberos',
  },
  {
    id: 3,
    name: 'Peluquería Moderna',
    services: ['Peinado', 'Coloración'],
    photo: 'https://source.unsplash.com/random/302x202?haircut',
    location: 'Monterrey',
    category: 'peluqueros',
  },
  {
    id: 4,
    name: 'Relajarte Masajes',
    services: ['Masaje relajante', 'Terapia corporal'],
    photo: 'https://source.unsplash.com/random/303x203?massage',
    location: 'Ciudad de México',
    category: 'masajistas',
  },
  {
    id: 5,
    name: 'Arte en Tinta',
    services: ['Tatuajes personalizados'],
    photo: 'https://source.unsplash.com/random/304x204?tattoo',
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
    // Filtrado por categoría y búsqueda (nombre o ubicación)
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-8 text-center md:text-left">
          Encuentra profesionales cerca de ti
        </h1>

        {/* Filtros y búsqueda */}
        <section className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Buscar por nombre, servicio o zona..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-3 rounded-l-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            autoComplete="off"
          />

          {/* Categorías */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="appearance-none cursor-pointer rounded-r-xl border border-purple-300 bg-white px-5 py-3 text-purple-700 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Seleccionar categoría"
            >
              {categories.map(({ key, label }) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-purple-600">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Resultados y mapa */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resultados */}
          <div className="lg:col-span-2">
            {filteredPros.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPros.map((pro) => (
                  <BarberCard key={pro.id} barber={pro} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 mt-20 text-lg">
                No se encontraron profesionales para esta búsqueda.
              </p>
            )}
          </div>

          {/* Placeholder mapa */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 h-full">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">
              Mapa (próximamente)
            </h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
              Aquí se mostrará un mapa con profesionales cercanos
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
