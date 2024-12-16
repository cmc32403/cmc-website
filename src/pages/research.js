import React from 'react';
import { Typography, Box, Grid2, Avatar, IconButton } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

function Research() {
  return (
    <Box sx={{paddingBottom: '4rem'}}>
      <Grid2 container spacing={4} alignItems="center" sx={{ padding: '2rem' }}>
        <Grid2 item xs={12} md={4}>
          {/* Image */}
          <Avatar
            alt="Christina Casey"
            src="..\images\christina_headshot2.jpg"
            sx={{ width: 200, height: 200, margin: 'auto' }}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
            Hello, I'm Christina Casey!
          </Typography>
          <Typography variant="body1">
            Below you'll find more about my work in undergraduate research.
          </Typography>
        </Grid2>
      </Grid2>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Computer Systems Genome
          <IconButton color="inherit" href="https://csgenome.org/" target="_blank">
            <WebIcon />
          </IconButton>
        </Typography>
        <Typography variant="body1">
          Virginia Polytechnic Institute and State University | Blacksburg, VA<br />
          Broadening Undergrauate Research Groups (BURGs)<br />
          - Frontend Lead Fall 2024<br />
          - Frontend Team Member 2023-2024<br />
          The goal of CSG is to catalog the lineage of computer system performance over time. 
          The frontend team creates user-friendly interfaces for our website's 
          features such as crowdsourcing, authentication, and other general pages. We also
          help develop visualizations for data collected and crowdsourced. As a frontend lead, I 
          mentor incoming students interested in frontend development, conduct code reviews, 
          and manage merges.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Technologies
        </Typography>
        <Typography variant="body1">
          Development environments: VSCode, Node.js, Jupyter Notebook<br />
          Languages/Frameworks/Libraries: JavaScript, React, MUI, MDX, D3, YAML/OpenApi<br />
          Version Control: GitLab
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Features
        </Typography>
        <Typography variant="body1">
          - Added a username field to the login page. Users must create an account with an email, username, and password.
          People who sign up with Google, Microsoft, or GitHub will be asked to set a username upon logging in. Users can log into
          their local accounts with either their email or username.<br />
          - Refined search, sort, and filter functionality of the user table that is only accessible by admins on our website. Updated the table
          so that admin can search, sort, and filter for users concurrently.<br />
          - Worked on and completed several design updates and smaller tasks. 
        </Typography>
      </Box>

    </Box>
  );
}

export default Research;
