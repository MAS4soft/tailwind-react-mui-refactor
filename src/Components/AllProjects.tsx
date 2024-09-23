// src/Components/AllProjects.tsx

import { Box, Grid, Typography } from "@mui/material";
import Project from "./Project";

import Project01 from "../assets/Project01.jpg";
import Project02 from "../assets/Project02.jpg";
import Project03 from "../assets/Project03.jpg";
import Project04 from "../assets/Project04.jpg";
import Project05 from "../assets/Project05.jpg";
import Project06 from "../assets/Project06.jpg";
import Project07 from "../assets/Project07.jpg";
import Project08 from "../assets/Project08.jpg";

interface ProjectType {
  title: string;
  location: string;
  image: string;
}

interface AllProjectsProps {
  limit?: number;
  title?: string;
}

const projects: ProjectType[] = [
  {
    title: "Milnerton Villa",
    location: "Cape Town, South Africa",
    image: Project01,
  },
  {
    title: "Saudi Arabia Consulate",
    location: "Giza, Egypt",
    image: Project02,
  },
  {
    title: "Banafsig Villa",
    location: "New Cairo, Egypt",
    image: Project03,
  },
  {
    title: "El-Ahly Club",
    location: "Nasr City, Egypt",
    image: Project04,
},
  {
    title: "Lake View",
    location: "Garden City, Egypt",
    image: Project05,
},
  {
    title: "SA Ambassador villa",
    location: "Zamalek, Egypt",
    image: Project06,
  },
  {
    title: "Villa Gardens",
    location: "Fifth Satelment, Egypt",
    image: Project07,
  },
  {
    title: "Lake Side building",
    location: "New Capital, Egypt",
    image: Project08,
  },
];

const AllProjects: React.FC<AllProjectsProps> = ({ limit = 4 }) => {
  const displayedProjects = projects.slice(0, limit);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" color="text.primary" gutterBottom>
        Our Projects
      </Typography>
      <Typography variant="h2" align="center" fontWeight="bold" gutterBottom>
        Latest Works
      </Typography>
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
