import { NavLink } from 'react-router-dom';



const navItems = [
  { to: '/', label: 'Home' },
  { to: '/sign-up', label: 'Sign Up' },
  { to: '/login', label: 'Login' },
];

function DesktopNavMenu() {
  return (
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
  );
}

export default DesktopNavMenu;
