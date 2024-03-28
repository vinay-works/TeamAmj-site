const WideTechStack = () => {
  const technologies = [
    {
      id: 1,
      technology: 'Python',
    },
    {
      id: 2,
      technology: 'NodeJS',
    },
    {
      id: 3,
      technology: 'Java',
    },
    {
      id: 4,
      technology: 'GoLang',
    },
    {
      id: 5,
      technology: 'Android',
    },
    {
      id: 6,
      technology: 'ios',
    },
    {
      id: 7,
      technology: 'HTML',
    },
    {
      id: 8,
      technology: 'CSS',
    },
    {
      id: 9,
      technology: 'JavaScript',
    },
    {
      id: 10,
      technology: 'React.JS',
    },
    {
      id: 11,
      technology: 'Tailwind CSS',
    },
    {
      id: 12,
      technology: 'Next.JS',
    },
    {
      id: 13,
      technology: 'Ruby On Rails',
    },
    {
      id: 14,
      technology: 'React Native',
    },
    {
      id: 15,
      technology: 'Flutter',
    },
    {
      id: 16,
      technology: 'Spring Boot',
    },
  ];

  return (
    <section className='my-[100px] py-6 md:py-[100px]'>
      <div className='container mx-auto p-4'>
        <p className='text-xl md:text-3xl text-center font-semibold mb-5'>
          A Wide Tech Stack Selection
        </p>

        <p className='text-xl text-osloGray text-center'>
          Discover multiple leading-edge technologies to help you succeed and
          innovate.
        </p>

        <div className='flex space-x-3 mt-8 justify-around overflow-hidden group'>
          <div className='flex space-x-3 animate-loop-scroll my-5 group-hover:paused'>
            {technologies.map((tech) => {
              return (
                <p
                  key={tech.id}
                  className='text-lg font-semibold py-2 px-4 border border-secondary rounded-md w-max hover:bg-secondary hover:shadow-lg hover:text-lightGray transition-all duration-200 ease-in'
                >
                  {tech.technology}
                </p>
              );
            })}
          </div>
          <div className='flex space-x-3 animate-loop-scroll my-5 group-hover:paused'>
            {technologies.map((tech) => {
              return (
                <p
                  key={tech.id}
                  className='text-lg font-semibold py-2 px-4 border border-secondary rounded-md w-max hover:bg-secondary hover:shadow-lg hover:text-lightGray transition-all duration-200 ease-in'
                >
                  {tech.technology}
                </p>
              );
            })}
          </div>
        </div>

        {/* reverse */}
        <div className='flex space-x-3 justify-around overflow-hidden group'>
          <div className='flex space-x-3 animate-loop-reverse my-5 group-hover:paused'>
            {technologies.map((tech) => {
              return (
                <p
                  key={tech.id}
                  className='text-lg font-semibold py-2 px-4 border border-secondary rounded-md w-max hover:bg-secondary hover:shadow-lg hover:text-lightGray transition-all duration-200 ease-in'
                >
                  {tech.technology}
                </p>
              );
            })}
          </div>
          <div className='flex space-x-3 animate-loop-reverse my-5 group-hover:paused'>
            {technologies.map((tech) => {
              return (
                <p
                  key={tech.id}
                  className='text-lg font-semibold py-2 px-4 border border-secondary rounded-md w-max hover:bg-secondary hover:shadow-lg hover:text-lightGray transition-all duration-200 ease-in'
                >
                  {tech.technology}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideTechStack;
