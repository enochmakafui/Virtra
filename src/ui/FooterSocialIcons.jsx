import { Instagram, Twitter, Linkedin } from 'lucide-react';

function FooterSocialIcons() {
  return (
    <ul className='flex gap-4 items-center justify-center md:justify-end'>
      <li>
        <a
          href=''
          className='hover:text-blue-500 duration-300 ease-in transition'
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          href=''
          className='hover:text-blue-500 duration-300 ease-in transition'
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          href=''
          className='hover:text-blue-500 duration-300 ease-in transition'
        >
          <Linkedin />
        </a>
      </li>
    </ul>
  );
}

export default FooterSocialIcons;
