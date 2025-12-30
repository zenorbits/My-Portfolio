import React from 'react'
import Navbar from '../components/Navbar'
import MainBody from '../components/MainBody'
import Projects from '../components/Projects'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChoseUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="main min-h-screen w-full font-mono text-white bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Navbar fixed at top */}


      {/* Main body fills remaining space */}
      <div className="main-body flex-1">
        <MainBody/>
      </div>
      <div className="projects">
        <Projects/>
      </div>
      <div className="services">
        <Services/>
      </div>
      <div className="choseUs">
        <WhyChooseUs/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Home