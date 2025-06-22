import { getCurrentYear } from '../utils/helpers';
import FooterNavMenu from './FooterNavMenu';
import FooterSocialIcons from './FooterSocialIcons';
import Logo from './Logo';

export default function Footer() {
  return (
    <>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0'>
        <Logo />
        <FooterNavMenu />
        <FooterSocialIcons />
      </div>
      <p className='text-center text-xs mt-3'>
        Copyright&copy;{getCurrentYear()} Vitra. All rights reserved.
      </p>
    </>
  );
}
