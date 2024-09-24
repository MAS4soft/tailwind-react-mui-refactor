import AllServices from "../../Components/AllServices";
import Footer from "../../Components/Footer";
import HeroAll from "../../Components/HeroAll";
// import OurClients from "../../Components/OurClints";

const Services = () => {
  return (
    <div>
      <HeroAll text="Services" />
      <AllServices />
      {/* <OurClients /> */}
      
      <Footer />
    </div>
  );
};

export default Services;
