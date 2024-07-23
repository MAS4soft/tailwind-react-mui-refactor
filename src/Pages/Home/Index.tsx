import AllServices from "../../Components/AllServices";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import OurTeam from "../../Components/OurTeam";

// import AboutInfo from "../../Components/AboutInfo";

const Home = () => {
  return (
    <div>
      <Hero />
      <AllServices />
      {/* <AboutInfo /> */}
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
