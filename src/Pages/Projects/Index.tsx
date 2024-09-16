// src\Pages\Projects\Index.tsx

import Footer from "../../Components/Footer";
import AllProjects from "../../Components/AllProjects";
import HeroAll from "../../Components/HeroAll";
// import OurClients from "../../Components/OurClints";

function Projects() {
  return (
    <div>
      <HeroAll text="Projects" />
      <AllProjects limit={8} title="Featured Projects" />
      {/* <OurClients /> */}
      <Footer />
    </div>
  );
}

export default Projects;
