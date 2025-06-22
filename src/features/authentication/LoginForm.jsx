import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className=' shadow-2xl px-4 py-8 rounded-md mt-12 sm:mt-4 md:mt-0'>
      <h2 className='text-2xl font-semibold mb-8 text-center'>
        Login to account
      </h2>
      <form action='' className=''>
        <label htmlFor='email' className='block mb-2'>
          Email
        </label>
        <input
          type='email'
          className='border border-gray-200 rounded-md p-1 w-full  md:w-4/5'
        />
        <label htmlFor='password' className='block mb-2 mt-4'>
          Password
        </label>
        <input
          type='password'
          className='border border-gray-200 rounded-md p-1 w-full md:w-4/5'
        />
        <button className='block bg-blue-500 text-white px-4 py-2 text-xl rounded-md  w-full md:w-4/5 mt-6'>
          Login
        </button>
      </form>
      <p className='mt-4 '>
        Don't have an account?<Link to='/sign-up'> Sign up</Link>
      </p>
    </div>
  );
}

export default LoginForm;
