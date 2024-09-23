// src/Components/AllProjectsSlider.tsx

import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from "./Project";
import { projects } from "../Components/projects"; 

interface AllProjectsProps {
  limit?: number;
}

const AllProjectsSlider: React.FC<AllProjectsProps> = ({ limit = 8 }) => {
  const displayedProjects = projects.slice(0, limit);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,          // تفعيل التحريك التلقائي
    autoplaySpeed: 3000,    // تعيين الوقت بين الحركات (3 ثوانٍ)
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <div style={{ fontSize: "30px", color: "#000" }}>←</div>,
    nextArrow: <div style={{ fontSize: "30px", color: "#000" }}>→</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', py: 8, textAlign: 'center' }}>
      <Typography variant="h4" color="text.primary" gutterBottom>
        Our Projects
      </Typography>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Latest Works
      </Typography>
      <Slider {...settings}>
        {displayedProjects.map((project, index) => (
          <Box key={index} textAlign="center" p={2}>
            <Project project={project} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AllProjectsSlider;
