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
import Courses from './pages/Courses'
import UploadCourse from './pages/UploadCourse'
import CourseDetails from './pages/CourseDetails'

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
        <Route path="/courses" element={<Courses />} />
        <Route path="/subir-curso" element={<UploadCourse />} />
        <Route path="/courseDetails" element={<CourseDetails />} />

        {/* Ruta para manejar 404 Not Found
        <Route
          path="*"
          element={
            <div className="text-center mt-10">Página no encontrada</div>
          }
        /> */}
      </Routes>
    </Router>
  )
}

export default App
