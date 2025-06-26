import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='h-screen md:grid md:grid-cols-[16rem_1fr] md:grid-rows-[auto_1fr]'>
      {/* Header */}
      <header className='md:col-span-2 row-span-1'>
        <Header onMenuClick={() => setShowSidebar(!showSidebar)} />
      </header>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full bg-white z-50 w-64 transform transition-transform duration-300
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          md:col-span-1 md:row-start-2
        `}
      >
        <Sidebar />
      </aside>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div
          className='fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden'
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Main content */}
      <main className='p-4 md:p-8 bg-[#f9fafb] overflow-y-auto md:col-span-1 md:row-start-2'>
        <div className='max-w-[128rem] mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
