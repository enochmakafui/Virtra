import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto font-['Preahvihear'] py-20 ">
        <h1 className='text-9xl uppercase'>Virtra</h1>
        <p className='text-lg pl-4'>Consult Specialist And Diagnostics</p>
        <p className='text-lg pl-4'>You all in One Health Application</p>
        <Link className='bg-blue-500 text-white px-4 py-2 text-xl rounded-3xl mt-4 inline-block hover:bg-blue-600 duration-300 ease-in'>
          Get Started
        </Link>
      </div>
      <Footer />
    </div>
  );
}
