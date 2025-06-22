import { Menu } from 'lucide-react';

function HamburgerButton({ onOpen }) {
  return (
    <button
      onClick={() => onOpen(true)}
      className='md:hidden text-blue-500 focus:outline-none z-50'
    >
      <Menu size={32} />
    </button>
  );
}

export default HamburgerButton;
