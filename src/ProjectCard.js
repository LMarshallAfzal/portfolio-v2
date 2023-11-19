import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProjectCard = ({ project, onClick }) => {

  return (
    <>
      <Card 
        className="project-card" 
        sx={{ 
          border: `7px solid #970cb0`,
          borderRadius: '20px', 
          bgcolor: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
          height: 350,
          width: 370
        }}
      >
        <CardMedia
          component="img"
          image={project.imageUrl}
          alt={project.title}
          sx={{
            MaxWidth: '100%',
            width: '350px',
            height: 200,
            margin: "10px",
            borderRadius: "15px",
            objectFit: "fill",
          }}
        />
        <CardContent 
          sx={{ 
            height: 150,
            overflow: 'hidden'
          }}
        >
          <Typography variant="h5" component="div" sx={{ color: 'white'}}>
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white'}}>
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
