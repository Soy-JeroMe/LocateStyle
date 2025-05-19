// src/components/BarberCard.jsx
export default function BarberCard({ barber }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
      <img
        src={barber.photo}
        alt={barber.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="text-xl font-bold text-black">{barber.name}</h2>
      <p className="text-gray-600">{barber.services.join(', ')}</p>
      <p className="text-sm text-gray-400 mt-1">Ubicación: {barber.location}</p>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 w-full">
        Reservar
      </button>
    </div>
  )
}
