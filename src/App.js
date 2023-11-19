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

const theme = createTheme({
  palette: {
    background: {
      default: 'url(src/portfolio-bg-dark.png)',
      size: 'cover',
      repeat: 'no-repeat',
      attachment: 'fixed',
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    // <ThemeProvider theme={theme}>
      <div className="App" style={{ backgroundImage: `url(${image})`}}>
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
    // </ThemeProvider>
  );
}

export default App;
