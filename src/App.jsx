  import React, { useEffect, useRef } from 'react'
  import { Route, Routes, useLocation } from 'react-router-dom'
  import Home from './pages/Home'
  import Navbar from './components/Navbar'
  import About from './pages/About'
  import ServicesPage from './pages/ServicesPage'
  import Contact from './pages/Contact'
  import { useGSAP } from '@gsap/react'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/all'

  const App = () => {


    const location = useLocation();

    useEffect(() => {
      ScrollTrigger.refresh();
    }, [location]);

    return (
      <div className="font-mono bg-black">

        

        {/* Navbar always visible */}
        <Navbar />

        {/* Page Routes */}
        <main className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    )
  }

  export default App