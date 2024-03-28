import Students from '../assets/students.jpg';

const Hero = () => {
  return (
    <section className='w-full h-[90vh] container mx-auto mb-28 grid grid-cols-2 gap-x-4 place-items-center'>
      <div className='flex flex-col gap-y-3'>
        <div className='flex flex-col items-start'>
          <p className='text-2xl md:text-7xl font-semibold'>
            Kickstart Your career
          </p>
          <span className='flex gap-x-3 items-center justify-center'>
            <p className='text-2xl md:text-7xl font-semibold'>with</p>
            <p className='text-2xl md:text-7xl font-semibold text-center border-2 border-primary p-2 rounded-full'>
              YugAmjTeam
            </p>
          </span>
        </div>
        <p className='text-lg md:text-2xl font-semibold text-start text-shuttleGray'>
          Internships, IT Courses & Career Launchpads <br />
          Your Path to Success Starts Here!
        </p>
        <p className='text-md md:text-md'>
          Join Us Today and Ignite Your Career
        </p>

        <button className=' w-max px-6 py-3 border rounded-full text-sm bg-secondary text-lightGray hover:bg-white hover:text-secondary hover:shadow-md transition duration-200 ease-in'>
          Explore Services
        </button>
      </div>

      <div className='group h-full overflow-hidden self-center'>
        <img
          src={Students}
          alt='students-bg'
          className='block w-full object-center object-cover hover:scale-105 transition-all ease-in duration-300 '
        />
      </div>
    </section>
  );
};

export default Hero;
