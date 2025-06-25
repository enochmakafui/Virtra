import { HiOutlineUser } from 'react-icons/hi';
import {
  HiOutlineCalendarDays,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineUserCircle,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

function SidebarNav() {
  const linkNormalClass = 'flex items-center gap-3 px-6 py-3 rounded-lg ';
  return (
    <ul className='flex flex-col gap-3'>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${linkNormalClass} bg-[#f9fafb] text-gray-800`
              : `${linkNormalClass} text-gray-600 hover:bg-[#f9fafb] transition ease-in-out duration-300 group`
          }
          to='doctors'
        >
          {({ isActive }) => (
            <>
              <HiOutlineUser
                className={`text-xl transition duration-300 ease-in-out ${isActive ? 'text-indigo-600' : 'text-gray-60 group-hover:text-indigo-600'}`}
              />
              <span>Doctors</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${linkNormalClass} bg-[#f9fafb] text-gray-800`
              : `${linkNormalClass} text-gray-600 hover:bg-[#f9fafb] group `
          }
          to='appointments'
        >
          {({ isActive }) => (
            <>
              <HiOutlineCalendarDays
                className={`text-xl transition ease-in-out duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-600 group-hover:text-indigo-600'}`}
              />
              <span>Appointments</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${linkNormalClass} bg-[#f9fafb] text-gray-800`
              : `${linkNormalClass} text-gray-600 hover:bg-[#f9fafb] transition ease-in-out duration-300 group`
          }
          to='health-bits'
        >
          {({ isActive }) => (
            <>
              <HiOutlineHeart
                className={`text-xl transition ease-in-out duration-300  ${isActive ? 'text-indigo-600' : 'text-gray-600 group-hover:text-indigo-600'}`}
              />
              <span>Health Bits</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${linkNormalClass} bg-[#f9fafb]  text-gray-800`
              : `${linkNormalClass} text-gray-600 hover:bg-[#f9fafb] transition ease-in-out duration-300 group`
          }
          to='virtra-ai'
        >
          {({ isActive }) => (
            <>
              <HiOutlineLightBulb
                className={`text-xl transition duration-300 ease-in-out ${isActive ? 'text-indigo-600' : 'text-gray-600 group-hover:text-indigo-600'}`}
              />
              <span>Virtra AI</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${linkNormalClass} bg-[#f9fafb]  text-gray-800`
              : `${linkNormalClass} text-gray-600 hover:bg-[#f9fafb] transition ease-in-out duration-300 group`
          }
          to='profile'
        >
          {({ isActive }) => (
            <>
              <HiOutlineUserCircle
                className={`text-xl ${isActive ? 'text-indigo-600' : 'text-gray-600 group-hover:text-indigo-600'}`}
              />
              <span>Profile</span>
            </>
          )}
        </NavLink>
      </li>
    </ul>
  );
}

export default SidebarNav;
