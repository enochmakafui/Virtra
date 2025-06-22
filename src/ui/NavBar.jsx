import { useState } from 'react';
import Logo from './Logo';
import MobileNavMenu from './MobileNavMenu';
import DesktopNavMenu from './DesktopNavMenu';
import HamburgerButton from './HamburgerButton';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className='max-w-6xl mx-auto px-4 py-1 flex items-center justify-between'>
        <Logo on='header'/>

        {/* Hamburger Button - Hidden when menu is open */}
        {!isOpen && <HamburgerButton onOpen={setIsOpen} />}

        <DesktopNavMenu />
      </div>

      <MobileNavMenu open={isOpen} onOpen={setIsOpen} />
    </nav>
  );
}
