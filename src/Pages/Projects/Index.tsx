import Footer from "../../Components/Footer";
import AllProjects from "../../Components/AllProjects";
import HeroAll from "../../Components/HeroAll";
import OurClients from "../../Components/OurClints";

function Projects() {
  return (
    <div>
      <HeroAll text="Projects" />
      <AllProjects />
      <OurClients />
      <Footer />
    </div>
  );
}

export default Projects;
