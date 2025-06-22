import logo from '/logo.png';

function Logo({ on }) {
  const headerLogoStyles = 'w-16 md:w-20';
  const footerLogoStyles = 'h-20 w-20 mx-auto md:mx-0';

  return (
    <div className={on === 'header' ? headerLogoStyles : footerLogoStyles}>
      <img src={logo} alt='Logo' className='w-full h-auto object-contain' />
    </div>
  );
}

export default Logo;

{
  /* <div className='h-20 w-20 mx-auto md:mx-0'>
          <img src={logo} alt='logo' className='w-full h-full' />
        </div> */
}
