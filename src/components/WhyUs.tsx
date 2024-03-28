const WhyUs = () => {
  return (
    <section className='container mx-auto my-[100px] pt-[100px] border-t-2'>
      <div className='w-full grid grid-cols-4'>
        <p className='inline-flex gap-x-1 text-sm text-primary font-semibold'>
          <small>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 22 22'
              fill='currentColor'
              className='w-4 h-4'
            >
              <path
                fillRule='evenodd'
                d='M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z'
                clipRule='evenodd'
              />
            </svg>
          </small>
          WHY AmjTeam?
        </p>

        <span className='flex flex-col col-span-3 gap-y-2 font-medium'>
          <p className='text-xl md:text-5xl'>
            Empowering futures through personalized
            <br />
          </p>
          <p className='text-xl md:text-5xl'>
            training and internship
            <br />
          </p>
          <p className='text-xl md:text-5xl'> experiences.</p>
        </span>
      </div>

      <div className='mt-[150px] grid grid-cols-4 gap-4'>
        <p className='text-lg font-semibold text-secondary'>
          Benefits of choosing AmjTeam <br />
          for your career journey:
        </p>
        <div className='w-full p-6 flex flex-col gap-y-12 bg-white rounded-lg hover:border hover:border-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
          </span>

          <h3 className='text-xl md:text-2xl font-medium text-primary'>
            Expert Guidance
          </h3>
          <p className='text-md text-shuttleGray leading-7'>
            Benefit from our seasoned instructors and mentors who bring years of
            industry experience to the table. Our team is dedicated to your
            success, providing personalized support every step of the way.
          </p>
        </div>
        <div className='w-full p-6 flex flex-col gap-y-12 bg-white rounded-lg hover:border hover:border-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
          </span>

          <h3 className='text-xl md:text-2xl font-medium text-primary'>
            Hands-On Learning
          </h3>
          <p className='text-md text-shuttleGray leading-7'>
            Experience practical, real-world scenarios through our immersive
            training programs. We believe in learning by doing, ensuring you
            develop the skills and confidence needed to excel in your field.
          </p>
        </div>
        <div className='w-full p-6 flex flex-col gap-y-12 bg-white rounded-lg hover:border hover:border-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
          </span>

          <h3 className='text-xl md:text-2xl font-medium text-primary'>
            Industry-Relevant Curriculum
          </h3>
          <p className='text-md text-shuttleGray leading-7'>
            Stay ahead of the curve with our up-to-date IT courses and
            internship opportunities. We tailor our programs to meet the demands
            of today's ever-evolving job market, giving you a competitive edge.
          </p>
        </div>
        <div className='w-full p-6 flex flex-col gap-y-12 bg-white rounded-lg hover:border hover:border-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
          </span>

          <h3 className='text-xl md:text-2xl font-medium text-primary'>
            Networking Opportunities
          </h3>
          <p className='text-md text-shuttleGray leading-7'>
            Connect with like-minded peers, industry professionals, and
            potential employers through our extensive network. Expand your
            horizons, build valuable relationships, and open doors to exciting
            career prospects.
          </p>
        </div>
        <div className='w-full p-6 flex flex-col gap-y-12 bg-white rounded-lg hover:border hover:border-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
          </span>

          <h3 className='text-xl md:text-2xl font-medium text-primary'>
            Career Support
          </h3>
          <p className='text-md text-shuttleGray leading-7'>
            From resume building to interview preparation, we provide
            comprehensive career assistance to help you land your dream job. Our
            goal is not just to educate but to empower you to thrive in your
            chosen field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
