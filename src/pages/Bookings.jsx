import { useState } from 'react'
import {
  FaCalendarAlt,
  FaUserTie,
  FaCut,
  FaClock,
  FaCheck,
  FaTimes,
} from 'react-icons/fa'

import Navbar from '../components/Navbar'

const initialBookings = [
  {
    id: 1,
    barber: 'Luis Ramírez',
    date: '2025-05-20 15:00',
    service: 'Corte de cabello',
    status: 'Pendiente',
  },
  {
    id: 2,
    barber: 'Ana Torres',
    date: '2025-05-21 17:30',
    service: 'Afeitado clásico',
    status: 'Confirmada',
  },
  {
    id: 3,
    barber: 'José Martínez',
    date: '2025-05-23 13:00',
    service: 'Corte + barba',
    status: 'Cancelada',
  },
]

export default function Bookings() {
  const [bookings] = useState(initialBookings)

  const statusStyles = {
    Confirmada:
      'bg-green-100 text-green-800 border-green-300 flex items-center gap-2',
    Pendiente:
      'bg-yellow-100 text-yellow-800 border-yellow-300 flex items-center gap-2',
    Cancelada: 'bg-red-100 text-red-800 border-red-300 flex items-center gap-2',
  }

  const statusIcons = {
    Confirmada: <FaCheck />,
    Pendiente: <FaClock />,
    Cancelada: <FaTimes />,
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white font-sans px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Título + resumen */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-purple-400">
              Mis Reservas
            </h1>
            <div className="bg-purple-800/50 px-5 py-3 rounded-full text-lg font-semibold text-purple-200 flex items-center gap-3 shadow-lg">
              <FaCalendarAlt className="text-purple-300" />
              <span>{bookings.length} Reservas Activas</span>
            </div>
          </div>

          {/* Lista de tarjetas */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:shadow-2xl transition cursor-pointer"
              >
                {/* Info principal */}
                <div>
                  <h2 className="text-xl font-bold text-purple-800 mb-3 truncate">
                    {booking.barber}
                  </h2>

                  <div className="flex items-center gap-3 text-gray-600 mb-2">
                    <FaCalendarAlt className="text-purple-600" />
                    <time dateTime={booking.date} className="font-medium">
                      {booking.date}
                    </time>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600 mb-4">
                    <FaCut className="text-purple-600" />
                    <span className="font-medium">{booking.service}</span>
                  </div>
                </div>

                {/* Estado */}
                <div className="flex justify-end mt-4">
                  <span
                    className={`inline-flex px-5 py-2 rounded-full border text-sm font-semibold select-none ${
                      statusStyles[booking.status]
                    }`}
                  >
                    {statusIcons[booking.status]}
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {bookings.length === 0 && (
            <p className="text-center text-gray-400 mt-16 text-lg">
              No tienes reservas aún.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
