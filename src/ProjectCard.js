import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProjectCard = ({ project, onClick }) => {

  return (
    <>
      <Card 
        className="project-card" 
        sx={{ 
          border: '7px solid #000000',
          borderRadius: '25px' 
        }}
      >
        <CardMedia
          component="img"
          image={project.imageUrl}
          alt={project.title}
          height="200"
        />
        <CardContent sx={{ overflow: "hidden" }}>
          <Typography variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {project.description}
          </Typography>
          <Box mt={2}>
            <Button className="btn btn-primary" onClick={() => onClick(project.id)}>
              View Details
            </Button>
          </Box>
        </CardContent>
      </Card>

    </>
  )
};

export default ProjectCard;
