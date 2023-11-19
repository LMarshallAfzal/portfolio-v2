import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button, Grid, CardMedia, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const ProjectDialog = ({ handleClose, open, project }) => {
  const [openGithubLink, setOpenGithubLink] = useState(false);
  const [openDribbbleLink, setOpenDribbbleLink] = useState(false);

  const handleGithubClick = () => {
    setOpenGithubLink(true);
  };

  const handleDribbbleClick = () => {
    setOpenDribbbleLink(true);
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {project.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
                title={project.title}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                {project.description}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleGithubClick}
                variant="outlined"
                color="primary"
              >
                GitHub
              </Button>
              {openGithubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer noopener">
                  {project.githubLink}
                </a>
              )}
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleDribbbleClick}
                variant="outlined"
                color="secondary"
              >
                Dribbble
              </Button>
              {openDribbbleLink && (
                <a href={project.dribbbleLink} target="_blank" rel="noreferrer noopener">
                  {project.dribbbleLink}
                </a>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectDialog;
