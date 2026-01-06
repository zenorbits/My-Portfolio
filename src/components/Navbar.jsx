import React, { useState } from 'react';
import Penguin from '../assets/Images/Penguin.png';
import { Link } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="h-full w-full">
            <div
                className="main-cont 
          fixed top-0 left-0 w-full z-40
          bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] 
          h-24 
          flex items-center px-6 md:px-16 justify-between"
            >
                {/* Logo + Name */}
                <Link to='/'>
                <div className="logo-name flex items-center gap-3 md:gap-4">
                    <img src={Penguin} alt="logo" className="h-10 md:h-14 drop-shadow-md" />
                    <span className="text-xl md:text-3xl font-extrabold tracking-wide text-gray-200 text-indigo-400">
                        ZenOrbits
                    </span>
                </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8 lg:gap-16 text-gray-300 font-semibold text-base lg:text-lg">
                    <Link to='/' className="hover:text-gray-100 transition-colors duration-300">Home</Link>
                    <Link to='/about' className="hover:text-gray-100 transition-colors duration-300">About</Link>
                    <Link to='/services' className="hover:text-gray-100 transition-colors duration-300">Services</Link>
                    <Link to='/contact' className="hover:text-gray-100 transition-colors duration-300">Contact</Link>
                </div>

                {/* GitHub Button (desktop only) */}
                <div className="github-button hidden md:block">
                    <a
                        href="https://github.com/zenorbits"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className="git-but 
             border border-gray-400 
            px-6 py-3 rounded-lg 
            text-gray-200 font-semibold text-lg 
            flex items-center gap-2 
            hover:bg-gray-200 hover:text-[#0f172a] 
            transition-all duration-300 shadow-md"
                        >
                            <FaGithub size={22} />
                            GitHub
                        </div>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-gray-200">
                    {menuOpen ? (
                        <FaTimes size={24} onClick={() => setMenuOpen(false)} />
                    ) : (
                        <FaBars size={24} onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t-1 border-white border-b-1 flex flex-col items-center gap-6 py-28 text-gray-300 font-medium h-full justify-center">
                    <Link to ='/' onClick={() => setMenuOpen(false)} className="hover:text-gray-100">Home</Link>
                    <Link to ='/about' onClick={() => setMenuOpen(false)} className="hover:text-gray-100">About</Link>
                    <Link to = '/services' onClick={() => setMenuOpen(false)} className="hover:text-gray-100">Services</Link>
                    <Link to = '/contact' onClick={() => setMenuOpen(false)} className="hover:text-gray-100">Contact</Link>
                    <a
                        href="https://github.com/zenorbits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-200 hover:text-[#0f172a] transition-all duration-300"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;