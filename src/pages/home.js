import React from 'react';
import { Typography, Box, Grid2, Avatar} from '@mui/material';

function Home() {
  return (
    <Box sx={{paddingBottom: '4rem'}}>
      {/* First Section: Image and Blurb */}
      <Grid2 container spacing={4} alignItems="center" sx={{ padding: '2rem' }}>
        <Grid2 item xs={12} md={4}>
          {/* Circular Image */}
          <Avatar
            alt="Christina Casey"
            src="..\images\vpoexec.jpg"
            sx={{ width: 200, height: 200, margin: 'auto' }}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          {/* Blurb */}
          <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
            Hello, I'm Christina Casey!
          </Typography>
          <Typography variant="body1">
            Welcome to my personal website! I'm a senior Computer Science 
            student passionate about frontend development. I am a natural 
            problem solver with strong interpersonal skills seeking an opportunity
            to apply my foundation in computer science to the dynamic and 
            creative fields of frontend development and web design. I am 
            eager to contribute my technical skills and keen eye for creativity 
            as well as learn new skills and gain valuable experience. Below 
            you'll find more about my background.
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
          - React<br />
          - JavaScript<br />
          - C<br />
          - Python<br />
          - HTML<br />
          - CSS<br />
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
