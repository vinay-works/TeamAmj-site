import AboutUsImage from '../assets/concept-of-unknown-things.svg';

const AboutUsComponent = () => {
  return (
    <section className='mt-[100px] py-6 md:py-[150px] bg-vulcan'>
      <div className='container mx-auto p-4'>
        <p className='text-md text-primary font-semibold mb-6'>About us</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='hidden lg:block'>
            <img src={AboutUsImage} alt='AboutUs' />
          </div>
          <div className='flex flex-col gap-y-7'>
            <h3 className='text-xl md:text-3xl font-semibold text-lightGray'>
              Promoting development through <br />
              technological innovation.
            </h3>

            <p className='text-osloGray md:text-md leading-7'>
              At the heart of our mission lies the commitment to empower our
              clients in reaching their objectives through meticulously tailored
              solutions. Drawing upon a wealth of expertise spanning over a
              decade, our seasoned team stands ready to assist you in
              identifying the perfect solution tailored precisely to your
              requirements. Whether you seek a fresh software application or a
              strategic shift in your marketing approach, rest assured, we're
              dedicated to lending an attentive ear and offering insightful
              guidance as you navigate your path forward. <br />
              Our aim is to facilitate the recruitment of an exceptional team
              tailored to your unique needs, leaving no margin for error. Trust
              us to deliver the finest talent, dedicated to meeting your every
              requirement.
            </p>

            <button className='w-max px-6 py-3 rounded-full text-sm bg-lightGray text-secondary font-medium hover:bg-primary hover:text-lightGray hover:shadow-md transition duration-200 ease-in'>
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
