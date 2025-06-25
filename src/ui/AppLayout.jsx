import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen'>
      <Header />
      <Sidebar />
      <main className=' p-8 bg-[#f9fafb] overflow-scroll'>
        <div className='max-w-[128rem] mx-auto my-0 '>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
