import AboutUsComponent from './components/AboutUs';
import Footer from './components/Footer';
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
      <main className='w-full h-full flex items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Testimonial Section Here...!</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
