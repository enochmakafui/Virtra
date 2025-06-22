import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/sign-up', label: 'Sign Up' },
  { to: '/login', label: 'Login' },
];

function MobileNavMenu({ open, onOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-blue-500 text-white flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-300 z-40 ${
        open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
    >
      {/* Close Button inside the menu */}
      <button
        onClick={() => onOpen(false)}
        className='absolute top-6 right-6 text-white z-50'
      >
        <X size={36} />
      </button>
      <ul className='flex flex-col gap-16'>
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'bg-white text-blue-500 font-semibold px-6 py-3 rounded-3xl text-lg md:text-xl'
                  : 'hover:bg-blue-600 px-6 py-3 rounded-3xl transition text-lg md:text-xl'
              }
              onClick={() => onOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavMenu;
