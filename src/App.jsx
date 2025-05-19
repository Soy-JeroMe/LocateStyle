// src/App.jsx
import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileClient from './pages/ProfileClient'
import ProfileProfessional from './pages/ProfileProfessional'
import Appointments from './pages/Appointments'
import Bookings from './pages/Bookings'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* Puedes agregar más rutas como login, register, etc. */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/client" element={<ProfileClient />} />
        <Route path="/profile/professional" element={<ProfileProfessional />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
