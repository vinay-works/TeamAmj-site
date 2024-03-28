import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className='w-full h-20 flex items-center justify-center'>
      <nav className='w-full h-full container mx-auto flex items-center justify-between'>
        <Link to={'/'} className='text-2xl font-semibold font-mono'>
          logo.
        </Link>

        <div className='flex items-center gap-x-6'>
          <Link
            to={'/'}
            className='relative py-1 hover:text-gray-400 before:content-[""] before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-secondary before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:ease-in'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='relative py-1 hover:text-gray-400 before:content-[""] before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-secondary before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:ease-in'
          >
            About
          </Link>
          <Link
            to={'/services'}
            className='relative py-1 hover:text-gray-400 before:content-[""] before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-secondary before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:ease-in'
          >
            Services
          </Link>
          <Link
            to={'/contact'}
            className='relative py-1 hover:text-gray-400 before:content-[""] before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-secondary before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:ease-in'
          >
            Contact
          </Link>
          <Link
            to={'/blogs'}
            className='relative py-1 hover:text-gray-400 before:content-[""] before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-secondary before:scale-0 hover:before:scale-100 before:origin-left before:transition-all before:ease-in'
          >
            Blogs
          </Link>

          <button className='px-6 py-3 border rounded-full text-sm bg-primary text-lightGray hover:bg-secondary hover:text-lightGray hover:shadow-md transition duration-200 ease-in'>
            Book a Call
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
