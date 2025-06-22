import { Link } from 'react-router-dom';
import DoctorLandingPageImage from './DoctorLandingPageImage';
import Container from './Container';

function HomePageMain() {
  return (
    <Container>
      <div className='flex flex-col justify-center md:justify-start gap-4 items-center md:items-start'>
        <h1 className='text-4xl md:text-9xl uppercase '>Virtra</h1>
        <div>
          <p className='text-lg pl-4 '>Consult Specialist And Diagnostics</p>
          <p className='text-lg pl-4 '>You all in One Health Application</p>
        </div>
        <Link
          to='/sign-up'
          className='bg-blue-500 text-white px-4 py-2 text-xl rounded-3xl mt-4 inline-block hover:bg-blue-600 hover:-translate-y-2 duration-300 ease-in ml-4 transition w-max '
        >
          Get Started
        </Link>
      </div>
      <DoctorLandingPageImage />
    </Container>
  );
}

export default HomePageMain;
