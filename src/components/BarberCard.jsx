// src/components/BarberCard.jsx
export default function BarberCard({ barber }) {
  return (
    <div className="bg-purple-950 border border-purple-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-700 transition-shadow duration-300">
      <img
        src={barber.photo}
        alt={barber.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-purple-100">{barber.name}</h3>
        <p className="text-purple-400 text-sm">{barber.location}</p>
        <ul className="flex flex-wrap gap-2 text-sm text-white">
          {barber.services.map((service, idx) => (
            <li
              key={idx}
              className="bg-purple-800/70 backdrop-blur-md px-3 py-1 rounded-full border border-purple-700"
            >
              {service}
            </li>
          ))}
        </ul>
        <button className="mt-3 w-full bg-purple-700 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
          Ver Perfil
        </button>
      </div>
    </div>
  )
}
