import { Box, Grid } from "@mui/material";
import Project from "./Project";
import { projects } from "./projectsData"; 
import TitleDetails from "./TitleDetails";

interface AllProjectsProps {
  limit?: number;
  title?: string; 
}

const AllProjects: React.FC<AllProjectsProps> = ({ limit = 4, title }) => {
  const displayedProjects = projects.slice(0, limit);

  return (
    <Box>
      <TitleDetails 
        title={title || "Our Projects"}  
        subtitle="Latest Works" 
      />
      <Grid container spacing={0} sx={{ px: 0 }}>
        {displayedProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProjects;
