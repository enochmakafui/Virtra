import { NavLink } from 'react-router-dom';
import logo from '/logo.png';

export default function NavBar() {
  return (
    <nav className='flex items-center justify-between py-2 text-[#333] max-w-6xl mx-auto'>
      <ul className='bg-blue-500 flex gap-3 items-center p-2 rounded-3xl'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-blue-500 font-semibold text-lg px-4 py-1 rounded-3xl'
                : 'text-white hover:bg-blue-600 text-lg px-4 py-1 rounded-3xl transition'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-up'
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-blue-500 font-semibold text-lg px-4 py-1 rounded-3xl'
                : 'text-white hover:bg-blue-600 text-lg px-4 py-1 rounded-3xl transition'
            }
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              isActive
                ? 'bg-white text-blue-500 font-semibold text-lg px-4 py-1 rounded-3xl'
                : 'text-white hover:bg-blue-600 text-lg px-4 py-1 rounded-3xl transition'
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
      <div className='h-25'>
        <img src={logo} alt='logo' className='w-full h-full' />
      </div>
    </nav>
  );
}
