import AboutUsComponent from './components/AboutUs';
import ClientTestimonials from './components/ClientTestimonials';
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
      <ClientTestimonials />
      <Footer />
</>
  );
};

export default App;
