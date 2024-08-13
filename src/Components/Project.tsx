// src\Components\Project.tsx
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface ProjectProps {
  project: {
    title: string;
    location: string;
    image: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Card sx={{ borderRadius: 0, boxShadow: 'none', position: 'relative' }}>
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{ width: '100%', aspectRatio: '2/3' }}
      />
      <CardContent sx={{ 
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        background: 'rgba(0, 0, 0, 0.5)', 
        color: 'common.white' 
      }}>
        <Typography variant="h6" fontWeight="bold">
          {project.title}
        </Typography>
        <Typography variant="body2">
          {project.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
