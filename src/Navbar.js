import React from 'react';
import { AppBar, Grid, Box, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="fixed" sx={{ bgcolor: '#2e3033', width: '100%', boxShadow: 0 }}>
    <Toolbar>
      <Grid container alignItems="center" justifyItems="space-between">
        <Grid item xs={3}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Leonard Marshall Afzal
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
            <Button variant="body2" component="a" href="#about">
              About
            </Button>
            <Button variant="body2" component="a" href="#projects">
              Projects
            </Button>
            <Button variant="body2" component="a" href="#contact">
              Contact
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Navbar;
