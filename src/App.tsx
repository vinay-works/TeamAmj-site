import AboutUsComponent from "./components/AboutUs";
import ClientTestimonials from "./components/ClientTestimonials";
import ContactUsForm from "./components/ContactUsForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import WideTechStack from "./components/WideTechStack";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUsComponent />
      <Services />
      <WideTechStack />
      <ClientTestimonials />
      <ContactUsForm />
      <Footer />
    </>
  );
};

export default App;
