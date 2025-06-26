import { HiBars4 } from 'react-icons/hi2';

function Header({ onMenuClick }) {
  return (
    <div className='flex gap-8 p-4 border-b border-b-gray-200 bg-white'>
      <button
        className='flex md:hidden items-center justify-center text-xl'
        onClick={onMenuClick}
      >
        <HiBars4 />
      </button>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
