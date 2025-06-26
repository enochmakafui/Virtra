import { Link } from 'react-router-dom';

function FooterNavMenu() {
  return (
    <ul className='flex gap-4 items-center justify-center'>
      <li>
        <Link className='hover:text-blue-500 duration-300 ease-in transition'>
          Home
        </Link>
      </li>
      <li>
        <Link
          className='hover:text-blue-500 duration-300 ease-in transition'
          to='app'
        >
          App
        </Link>
      </li>
      <li>
        <Link className='hover:text-blue-500 duration-300 ease-in transition'>
          About
        </Link>
      </li>
      <li>
        <Link className='hover:text-blue-500 duration-300 ease-in transition'>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default FooterNavMenu;
