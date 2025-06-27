import { useQuery } from '@tanstack/react-query';
import { getDoctors } from '../services/apiDoctors';
import DoctorCard from '../features/doctors/DoctorCard';

function Doctors() {
  const {
    isLoading,
    data: doctors,
    error,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: getDoctors,
  });
  console.log(doctors);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className='text-3xl text-gray-600 font-semibold mb-8'>Doctors</h2>

      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {doctors.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
