// src/Components/AllProjects.tsx

import { Box, Grid, Typography } from "@mui/material";
import Project from "./Project";

interface ProjectType {
  title: string;
  location: string;
  image: string;
}

interface AllProjectsProps {
  limit?: number;
  title?: string; // Ensure title is included here
}

const projects: ProjectType[] = [
  {
    title: "Science Lab Building",
    location: "New York, USA",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img1-min.jpg",
  },
  {
    title: "Long Gate Bridge",
    location: "Malmo, SE",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img2-min.jpg",
  },
  {
    title: "Enix Lawyer Building",
    location: "Toronto, CA",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img3-min.jpg",
  },
  {
    title: "Deep Sea Bridge",
    location: "Athens, GR",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img4-min.jpg",
  },
  {
    title: "Science Lab Building 2",
    location: "New York, USA",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img-5.jpg",
  },
  {
    title: "Long Gate Bridge 2",
    location: "Malmo, SE",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img-6.jpg",
  },
  {
    title: "Long Gate Bridge 2",
    location: "Malmo, SE",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img-7.jpg",
  },
  {
    title: "Long Gate Bridge 2",
    location: "Malmo, SE",
    image:
      "https://websitedemos.net/construction-company-02/wp-content/uploads/sites/977/2021/11/img-8.jpg",
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
