import Logo from './Logo';
import SidebarNav from './SidebarNav';
function Sidebar() {
  return (
    <div className='flex flex-col items-center gap-12 row-span-full px-6 py-6 border-r-gray-200 border-r bg-white'>
      <Logo />
      <SidebarNav />
    </div>
  );
}

export default Sidebar;
