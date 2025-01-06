import React from 'react';
import { Typography, Box, Grid2, Avatar} from '@mui/material';

function Home() {
  return (
    <Box sx={{paddingBottom: '4rem'}}>
      <Grid2 container spacing={4} alignItems="center" sx={{ padding: '2rem' }}>
        <Grid2 item xs={12} md={4}>
          {/* Image */}
          <Avatar
            alt="Christina Casey"
            src="..\images\vpoexec.jpg"
            sx={{ width: 200, height: 200, margin: 'auto' }}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
            Hello, I'm Christina Casey!
          </Typography>
          <Typography variant="body1">
            Welcome to my personal website! I’m a senior at Virginia Tech pursuing a 
            degree in Computer Science with minors in Mathematics and Strategic 
            Communication. Over the past four years, I’ve developed a passion for 
            frontend development, ethics in technology, computer security, leadership, 
            and service through my coursework, projects, and community involvement. 
            I’m currently seeking a full-time role where I can contribute to impactful 
            projects and continue to grow as a developer. Below you'll find more about 
            my background.
          </Typography>
        </Grid2>
      </Grid2>

      {/* Sections with different backgrounds */}
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Education
        </Typography>
        <Typography variant="body1">
          Virginia Polytechnic Institute and State University | Blacksburg, VA<br />
          B.S. Computer Science<br />
          Minors in Mathematics and Strategic Communication<br />
          Expected Graduation May 2025<br />
          GPA: 3.1<br />
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Skills
        </Typography>
        <Typography variant="h6">
          Technical
        </Typography>
        <Typography variant="body1">
          - Java<br />
          - Python<br />
          - C<br />
          - JavaScript<br />
          - TypeScript<br />
          - HTML/CSS<br />
          - React.js<br />
          - Next.js<br />
          - Git<br />
        </Typography>
        <Typography variant="h6">
          Soft
        </Typography>
        <Typography variant="body1">
          - Public Speaking<br />
          - Teamwork<br />
          - Adaptable<br />
          - Attention to Detail<br />
          - Responsible<br />
          - Relator<br />
          - Learner<br />  
          - Time Management
        </Typography>
      </Box>

      {/*<Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem'}}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Learn More!
        </Typography>
        <Typography variant="body1">
          Make cards???
        </Typography>
      </Box>*/}
    </Box>
  );
}

export default Home;
