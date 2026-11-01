import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function MainLayout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 50)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (<><a href="#main" className="sr-only focus:not-sr-only focus:p-3">Skip</a><Navbar /><main id="main" className="fade"><Outlet /></main><Footer /></>)
}
