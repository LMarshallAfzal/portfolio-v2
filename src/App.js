import { useState } from 'react';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import image from './portfolio-bg-dark.png';
import { Grid, Container, ThemeProvider, createTheme } from '@mui/material';
// import './App.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Donec nec purus vel enim tristique auctor.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Donec nec purus vel enim tristique auctor.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
  {
    id: 4,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
  {
    id: 5,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:566/1*j3xVt5zsYuAB19-QATkk_w.png',
  },
  {
    id: 6,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
  {
    id: 7,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
  {
    id: 8,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://www.parasoft.com/wp-content/uploads/2021/11/AdobeStock_348397404_Cropped_1500x850-768x435.jpg.webp',
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${image})`, marginTop: 85 }}>
      <Navbar />

      <Container sx={{ maxWidth: "80%" }}>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4}>
              <ProjectCard
                project={project}
                onClick={() => handleClickOpen(project)}
              />

            </Grid>
          ))}
        </Grid>
      </Container>
      {selectedProject && (
        <ProjectDialog
          open={open}
          handleClose={handleClose}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default App;
