import React from 'react';
import { Typography, Box, Grid2, Avatar } from '@mui/material';

function Portfolio() {
  return (
    <Box sx={{paddingBottom: '4rem'}}>
      {/* First Section: Image and Blurb */}
      <Grid2 container spacing={4} alignItems="center" sx={{ padding: '2rem' }}>
        <Grid2 item xs={12} md={4}>
          {/* Circular Image */}
          <Avatar
            alt="Christina Casey"
            src="..\images\christina_ceed.jpg"
            sx={{ width: 200, height: 200, margin: 'auto' }}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          {/* Blurb */}
          <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
            Hello, I'm Christina Casey!
          </Typography>
          <Typography variant="body1">
            Below you'll find more about projects I've worked on.
          </Typography>
        </Grid2>
      </Grid2>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          This Website!
        </Typography>
        <Typography variant="body1">
          I coded my personal website from scratch! 
          I created a react web app using React, 
          JavaScript, MUI, and some CSS. I added widgets
          from Spotify and Goodreads as well!
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Job Information Form (JIF) Generator
        </Typography>
        <Typography variant="body1">
          The Big Event at Virginia Tech is the second largest student-run day of
          service in the country. Job Information Forms contain all the information
          volunteers need to know about their service project. I used the Apps Script 
          extension on Google Sheets to create a script that parses the rows and columns
          from our projects master sheet and populates cells on the JIF template.
          The JIFs are then downloaded to a folder and ready to be handed out to our volunteers.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Twitter Discovery Portal
        </Typography>
        <Typography variant="body1">
          A web application displaying 6 billion Twitter collections. The collections, reversed
          engineered from three different databases, YTK, DMI, and SFM, and placed in MongoDB.
          Worked on the addition of a login and about page on the web application. 
        </Typography>
      </Box>
    </Box>
  );
}

export default Portfolio;
