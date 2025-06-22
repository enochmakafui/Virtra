import doctorImage from '/images/doctor.jpg';

function DoctorLandingPageImage() {
  return (
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
  );
}

export default DoctorLandingPageImage;
