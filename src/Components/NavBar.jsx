import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/sign-up', label: 'Sign Up' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <nav className=''>
      <div className='max-w-6xl mx-auto px-4 py-1 flex items-center justify-between'>
        {/* Logo */}
        <div className='w-16 md:w-20'>
          <img src={logo} alt='Logo' className='w-full h-auto object-contain' />
        </div>

        {/* Hamburger Button - Hidden when menu is open */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className='md:hidden text-blue-500 focus:outline-none z-50'
          >
            <Menu size={32} />
          </button>
        )}

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-3 items-center bg-blue-500 px-2 py-3 rounded-3xl'>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white text-blue-500 font-semibold text-base px-4 py-2 rounded-3xl'
                    : 'text-white hover:bg-blue-600 text-base px-4 py-2 rounded-3xl transition'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-500 text-white flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Close Button inside the menu */}
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-6 right-6 text-white z-50'
        >
          <X size={36} />
        </button>

        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-blue-500 font-semibold px-6 py-3 rounded-3xl text-lg md:text-xl'
                : 'hover:bg-blue-600 px-6 py-3 rounded-3xl transition text-lg md:text-xl'
            }
            onClick={() => setIsOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
