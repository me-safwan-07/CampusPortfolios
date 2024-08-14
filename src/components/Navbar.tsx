// src/components/Navbar.tsx
import React, { useState } from 'react';
import { IoReorderTwoOutline, IoClose } from 'react-icons/io5';

interface NavbarProps {
  isLoggedIn: boolean; // Add a prop to indicate if the user is logged in
}

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-2 py-0 max-w-full mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-semibold">CAMPUS Portfolios</span>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-full bg-black hover:bg-black transition-colors duration-1200"
        >
          {isMenuOpen ? <IoClose size={20} /> : <IoReorderTwoOutline size={20} />}
        </button>
        {/* Mobile Menu */}
        <ul className={`lg:hidden fixed top-14 left-0 h-full w-full bg-black flex flex-col items-center justify-start ${isMenuOpen ? 'block' : 'hidden'}`}>
          {!isLoggedIn && (
            <>
              <li className="py-2 w-full text-center">
                <a href="#login" className="text-white text-lg hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </a>
              </li>
              <li className="py-2 w-full text-center">
                <a href="#signup" className="text-white text-lg hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </a>
              </li>
            </>
          )}
          {['Template', 'about', 'contact'].map((item) => (
            <li key={item} className="py-2 w-full text-center">
              <a href={`#${item}`} className="text-white text-lg hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          {isLoggedIn && (
            <li className="py-2 w-full text-center">
              <img src="/path/to/profile.jpg" alt="Profile" className="rounded-full h-12 w-12" />
            </li>
          )}
        </ul>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {['Template', 'about', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-gray-300 transition-colors duration-200">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          {!isLoggedIn ? (
            <>
              <a href="#login" className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                Sign In
              </a>
              <a href="#signup" className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
                Sign Up
              </a>
            </>
          ) : (
            <img src="/path/to/profile.jpg" alt="Profile" className="rounded-full h-10 w-10" />
          )}
        </div>
      </div>
    </nav>
  );
};

