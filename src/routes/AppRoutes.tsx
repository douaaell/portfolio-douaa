import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import ProjectDetails from '../pages/ProjectDetails'
import Certifications from '../pages/Certifications'
import CertificationDetails from '../pages/CertificationDetails'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
export default function AppRoutes() {
  return (
    <Routes><Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:projectId" element={<ProjectDetails />} />
      <Route path="certifications" element={<Certifications />} />
      <Route path="certifications/:certificationId" element={<CertificationDetails />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound back="/" />} />
    </Route></Routes>
  )
}
