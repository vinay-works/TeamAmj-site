const StatsSection = () => {
  return (
    <section className='w-full mt-[100px] py-[100px] bg-white flex items-center justify-center'>
      <div className='container mx-auto h-full flex items-center justify-between'>
        <span>
          <p className='text-5xl text-primary text-center font-semibold mb-2'>
            15+
          </p>
          <h4 className='text-lg text-center text-secondary font-semibold'>
            Expert Trainers
          </h4>
        </span>
        <span>
          <p className='text-5xl text-primary text-center font-semibold mb-2'>
            2000+
          </p>
          <h4 className='text-lg text-center text-secondary font-semibold'>
            Students Joined
          </h4>
        </span>
        <span>
          <p className='text-5xl text-primary text-center font-semibold mb-2'>
            1500+
          </p>
          <h4 className='text-lg text-center text-secondary font-semibold'>
            Got Placed
          </h4>
        </span>
        <span>
          <p className='text-5xl text-primary text-center font-semibold mb-2'>
            84%
          </p>
          <h4 className='text-lg text-center text-secondary font-semibold'>
            Success Ratio
          </h4>
        </span>
      </div>
    </section>
  );
};

export default StatsSection;
