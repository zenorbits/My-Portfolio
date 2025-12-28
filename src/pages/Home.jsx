import React from 'react'
import Navbar from '../components/Navbar'
import MainBody from '../components/MainBody'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className="main h-screen w-full font-mono text-white bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Navbar fixed at top */}


      {/* Main body fills remaining space */}
      <div className="main-body flex-1">
        <MainBody/>
      </div>
      <div className="projects">
        <Projects/>
      </div>
    </div>
  )
}

export default Home