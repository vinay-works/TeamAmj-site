import { MoveRight } from 'lucide-react';

const Services = () => {
  return (
    <section className='w-full text-lightGray bg-vulcan mb-[50px] md:mb-[100px] p-[26px] lg:p-[150px]'>
      <div className='container mx-auto'>
        <h3 className='text-2xl md:text-4xl font-semibold text-center border-b-2 w-max mx-auto'>
          Our Services
        </h3>

        <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center my-[30px] lg:my-[100px]'>
          <div className=' bg-shark grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-6 p-8 lg:p-14 rounded-md'>
            <p className='text-primary font-medium border-b h-max w-max leading-loose border-b-primary'>
              01.
            </p>

            <div className='flex flex-col gap-y-8'>
              <h5 className='text-primary text-lg font-medium'>IT Services</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, at dicta! Delectus ut libero dolorum obcaecati
                optio quae temporibus laudantium.
              </p>

              <button className='group/button w-max inline-flex items-center gap-x-6 text-md font-medium hover:text-primary'>
                Learn More{' '}
                <span className=' bg-[#34373e] p-3 rounded-full group-hover/button:translate-x-2 transition-all ease-linear duration-200'>
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>
          <div className=' bg-shark grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-6 p-8 lg:p-14 rounded-md'>
            <p className='text-primary font-medium border-b h-max w-max leading-loose border-b-primary'>
              02.
            </p>

            <div className='flex flex-col gap-y-8'>
              <h5 className='text-primary text-lg font-medium'>
                Digital Marketing
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, at dicta! Delectus ut libero dolorum obcaecati
                optio quae temporibus laudantium.
              </p>

              <button className='group/button w-max inline-flex items-center gap-x-6 text-md font-medium hover:text-primary'>
                Learn More{' '}
                <span className=' bg-[#34373e] p-3 rounded-full group-hover/button:translate-x-2 transition-all ease-linear duration-200'>
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>
          <div className=' bg-shark grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-6 p-8 lg:p-14 rounded-md'>
            <p className='text-primary font-medium border-b h-max w-max leading-loose border-b-primary'>
              03.
            </p>

            <div className='flex flex-col gap-y-8'>
              <h5 className='text-primary text-lg font-medium'>Internships</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, at dicta! Delectus ut libero dolorum obcaecati
                optio quae temporibus laudantium.
              </p>

              <button className='group/button w-max inline-flex items-center gap-x-6 text-md font-medium hover:text-primary'>
                Learn More{' '}
                <span className=' bg-[#34373e] p-3 rounded-full group-hover/button:translate-x-2 transition-all ease-linear duration-200'>
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>
          <div className=' bg-shark grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-y-6 p-8 lg:p-14 rounded-md'>
            <p className='text-primary font-medium border-b h-max w-max leading-loose border-b-primary'>
              04.
            </p>

            <div className='flex flex-col gap-y-8'>
              <h5 className='text-primary text-lg font-medium'>HR Solutions</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, at dicta! Delectus ut libero dolorum obcaecati
                optio quae temporibus laudantium.
              </p>

              <button className='group/button w-max inline-flex items-center gap-x-6 text-md font-medium hover:text-primary'>
                Learn More{' '}
                <span className=' bg-[#34373e] p-3 rounded-full group-hover/button:translate-x-2 transition-all ease-linear duration-200'>
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button className='w-max px-6 py-3 rounded-full text-sm bg-lightGray text-secondary font-medium hover:bg-primary hover:text-lightGray hover:shadow-md transition duration-200 ease-in'>
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
