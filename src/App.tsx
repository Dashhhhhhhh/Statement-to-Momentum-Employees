import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routerBasename } from './lib/basename'
import { MainLayout } from './layout/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LeadershipPage } from './pages/LeadershipPage'
import { MissionVisionPage } from './pages/MissionVisionPage'
import { ServicesPage } from './pages/ServicesPage'
import { ValuesPage } from './pages/ValuesPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="mission-vision" element={<MissionVisionPage />} />
          <Route path="values" element={<ValuesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
