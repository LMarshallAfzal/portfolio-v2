import { useState } from 'react';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import { Grid, Container } from '@mui/material';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam quis enim semper faucibus.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Donec nec purus vel enim tristique auctor.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 4,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 5,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 6,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 7,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
  {
    id: 8,
    title: 'Project 3',
    description: 'Phasellus nec felis sed ante lacinia semper.',
    imageUrl: 'https://cdn-developer-wp.arc.dev/wp-content/uploads/2021/08/Adham-Dannaway-home.gif',
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="App" style={{
      background: 'url("portfolio-bg-dark.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />

      <Container sx={{ maxWidth: "80%" }}>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4}>
              <ProjectCard
                project={project}
                onClick={handleClickOpen}
              />
              <ProjectDialog
                open={open}
                handleClose={handleClose}
                project={project}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
