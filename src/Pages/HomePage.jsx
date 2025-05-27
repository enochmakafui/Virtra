import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';
import doctorImage from '/images/doctor.jpg';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto font-['Preahvihear'] py-20 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-40">
        <div className='flex flex-col justify-center gap-4 items-center'>
          <h1 className='text-4xl md:text-9xl uppercase mt-10 md:mt-0'>Virtra</h1>
          <div>
            <p className='text-lg pl-4 '>Consult Specialist And Diagnostics</p>
            <p className='text-lg pl-4 '>You all in One Health Application</p>
          </div>
          <Link className='bg-blue-500 text-white px-4 py-2 text-xl rounded-3xl mt-4 inline-block hover:bg-blue-600 hover:-translate-y-2 duration-300 ease-in ml-4 transition w-max '>
            Get Started
          </Link>
        </div>
        <div className='mt-28 md:mt-0'>
          <div className='relative inline-block mx-auto'>
            {/* Blue Blob Behind Image */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-300 opacity-80 transform scale-125 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-sm z-0 animate-pulse'></div>

            {/* Main Image */}
            <img
              src={doctorImage}
              alt='Portrait'
              className='w-80 h-80 rounded-2xl object-cover shadow-2xl relative z-10 transition-transform duration-300 ease-in hover:-translate-y-2 '
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
