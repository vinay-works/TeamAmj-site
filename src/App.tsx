import AboutUsComponent from './components/AboutUs';
import ClientTestimonials from './components/ClientTestimonials';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Services from './components/Services';
import WideTechStack from './components/WideTechStack';

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUsComponent />
      <Services />
      <WideTechStack />
      <ClientTestimonials />
      <main className='w-full h-full flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Testimonial Section Here...!</h1>
      </main>
      <main className='w-full h-full flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Footer Section Here...!</h1>
      </main>
    </>
  );
};

export default App;
