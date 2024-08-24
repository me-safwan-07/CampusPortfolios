import React, { useState, useEffect } from 'react';
import { IoReorderTwoOutline, IoClose } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md'; // Light mode icon
import { LuMoonStar } from 'react-icons/lu'; // Dark mode icon
import { useTheme } from '../hooks/useTheme'; // Import the useTheme hook

interface NavbarProps {
  isLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme hook

  const lightModeLogo = '/assets/light.logo.svg';
  const darkModeLogo = '/assets/dark.logo.svg';
  const themeClasses = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const menuBackground = theme === 'dark' ? 'bg-black' : 'bg-white';
  // const buttonClass = `px-4 py-2 rounded transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-200'}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`nav-bar fixed border-b border-b-gray-800  top-0 left-0 w-full z-50 ${themeClasses} p-4`}>
      <div className="flex justify-between items-center px-2 py-0 max-w-full mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img 
            src={theme === 'dark' ? darkModeLogo : lightModeLogo} 
            alt="Logo" 
            className="h-8"
          />
          <a href="/" className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            CAMPUS Portfolios
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-full transition-colors duration-200 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          {isMenuOpen ? <IoClose size={20} /> : <IoReorderTwoOutline size={20} />}
        </button>

        {/* Mobile Menu */}
        <ul className={`lg:hidden text-xl fixed top-16 text-start left-0 gap-2 h-full w-full ${menuBackground} flex flex-col items-center justify-start ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* {!isLoggedIn && (
            <>
              <li className="py-2 w-full text-center">
                <a href="/login" className={`text-lg hover:text-gray-300 transition-colors duration-200 ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`} onClick={() => setIsMenuOpen(false)}>
                  Log In
                </a>
              </li>
              <li className="py-2 w-full text-center">
                <a href="/signup" className={`text-lg hover:text-gray-300 transition-colors duration-200 ${theme === 'dark' ? 'text-black bg-white' : 'text-white bg-black'}`} onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </a>
              </li>
            </>
          )} */}
          <a href="/" className='hover:text-gray-300 font-transition-colors duration-200 !important'>Template</a>
          <a href="/why-portfolio">Why Portfolio</a>
          <a href="/about">About</a>
          
          {isLoggedIn && (
            <li className="py-2 w-full text-center">
              <img src="/path/to/profile.jpg" alt="Profile" className="rounded-full h-12 w-12" />
            </li>
          )}
          <button
            onClick={toggleTheme}
            // className={buttonClass}
          >
            {theme === 'dark' ? <MdOutlineLightMode size={20} /> : <LuMoonStar size={20} />}
          </button>
        </ul>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Links */}
          <a href="/" className='hover:text-gray-300 transition-colors duration-200 !important'>Template</a>
          <a href="/why-portfolio">Why Portfolio</a>
          <a href="/about">About</a>
          {/* Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            // className={buttonClass}
          >
            {theme === 'dark' ? <MdOutlineLightMode size={20} /> : <LuMoonStar size={20} />}
          </button>
        </div>

        {/* <div className="hidden lg:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <a 
                href="/login" 
                className={`px-4 py-1 rounded border transition-colors duration-200 
                  ${theme === 'dark' 
                    ? 'bg-black text-white border-gray-500 hover:bg-gray-600' 
                    : 'bg-white text-black border-gray-300 hover:bg-gray-200'
                  }`}
              >
                Sign In
              </a>
              <a 
                href="/signup" 
                className={`px-4 py-1 rounded border transition-colors duration-200 
                  ${theme === 'dark' 
                    ? 'bg-white text-black border-gray-500 hover:bg-gray-600' 
                    : 'bg-black text-white border-gray-300 hover:bg-gray-200'
                  }`}
              >
                Sign Up
              </a>
            </>
          ) : (
            <img src="/path/to/profile.jpg" alt="Profile" className="rounded-full h-10 w-10" />
          )}
        </div> */}
      </div>
    </nav>
  );
};
