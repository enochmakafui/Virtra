import logo from '/logo.png';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0'>
        <div className='h-20 w-20 mx-auto md:mx-0'>
          <img src={logo} alt='logo' className='w-full h-full' />
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <Link className='hover:text-blue-500 duration-300 ease-in transition'>
            Home
          </Link>
          <Link className='hover:text-blue-500 duration-300 ease-in transition'>
            App
          </Link>
          <Link className='hover:text-blue-500 duration-300 ease-in transition'>
            About
          </Link>
          <Link className='hover:text-blue-500 duration-300 ease-in transition'>
            Contact
          </Link>
        </div>

        <div className='flex gap-4 items-center justify-center md:justify-end'>
          <a
            href=''
            className='hover:text-blue-500 duration-300 ease-in transition'
          >
            <Instagram />
          </a>
          <a
            href=''
            className='hover:text-blue-500 duration-300 ease-in transition'
          >
            <Twitter />
          </a>
          <a
            href=''
            className='hover:text-blue-500 duration-300 ease-in transition'
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <p className='text-center text-xs mt-3'>
        Copyright&copy;{new Date().getFullYear()} Vitra. All rights reserved.
      </p>
    </>
  );
}
