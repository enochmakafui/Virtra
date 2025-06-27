function DoctorCard({ doctor }) {
  return (
    <div className='rounded-2xl bg-white shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ease-in-out border border-gray-100'>
      <div className='w-full h-48 overflow-hidden'>
        <img
          src={doctor.image}
          alt={doctor.name}
          className='w-full h-full object-cover object-top transition-transform duration-300 ease-in-out hover:scale-105'
        />
      </div>
      <div className='p-5 flex flex-col gap-4'>
        <h2 className='text-lg font-bold text-gray-800 line-clamp-1'>
          {doctor.name}
        </h2>
        <p className='text-sm text-gray-600 line-clamp-2'>
          {doctor.speciality}
        </p>
        <button
          className='self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition-all'
          onClick={() => alert(`Booking appointment with Dr. ${doctor.name}`)}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
