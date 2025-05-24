import { useState } from 'react'
import {
  FaCalendarAlt,
  FaUser,
  FaCut,
  FaClock,
  FaCheck,
  FaTimes,
} from 'react-icons/fa'
import Navbar from '../components/Navbar'

const initialAppointments = [
  {
    id: 1,
    client: 'Carlos Pérez',
    date: '2025-05-20 15:00',
    service: 'Corte de cabello',
    status: 'Pendiente',
  },
  {
    id: 2,
    client: 'Lucía Gómez',
    date: '2025-05-21 17:30',
    service: 'Afeitado clásico',
    status: 'Confirmada',
  },
  {
    id: 3,
    client: 'Juan Ríos',
    date: '2025-05-23 13:00',
    service: 'Corte + barba',
    status: 'Cancelada',
  },
]

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments)

  const updateStatus = (id, newStatus) => {
    const updated = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: newStatus } : appt
    )
    setAppointments(updated)
  }

  const statusStyles = {
    Confirmada: 'bg-green-100 text-green-800 border-green-300',
    Pendiente: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Cancelada: 'bg-red-100 text-red-800 border-red-300',
  }

  const statusIcons = {
    Confirmada: <FaCheck />,
    Pendiente: <FaClock />,
    Cancelada: <FaTimes />,
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-6 py-16 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-6 md:mb-0">
              Citas de Clientes
            </h1>
            <div className="bg-purple-800/40 px-5 py-3 rounded-full text-lg font-semibold text-purple-200 flex items-center gap-3 shadow-md">
              <FaCalendarAlt className="text-purple-300" />
              <span>{appointments.length} Citas</span>
            </div>
          </div>

          {/* Tarjetas */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white text-black rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Cliente e información */}
                <div>
                  <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                    <FaUser className="text-purple-500" />
                    {appt.client}
                  </h2>

                  <div className="space-y-2 text-gray-700 font-medium text-sm">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-600" />
                      {appt.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCut className="text-purple-600" />
                      {appt.service}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-purple-600" />
                      Estado:
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${
                          statusStyles[appt.status]
                        }`}
                      >
                        {statusIcons[appt.status]}
                        {appt.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Acciones */}
                {appt.status === 'Pendiente' && (
                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      onClick={() => updateStatus(appt.id, 'Confirmada')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md transition"
                    >
                      <FaCheck />
                      Confirmar
                    </button>
                    <button
                      onClick={() => updateStatus(appt.id, 'Cancelada')}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md transition"
                    >
                      <FaTimes />
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sin citas */}
          {appointments.length === 0 && (
            <p className="text-center text-gray-400 mt-20 text-lg">
              No hay citas registradas aún.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
