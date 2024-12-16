import React from 'react';
import { Typography, Box, Grid2, Avatar } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Goodreads from '../components/goodreads.js';
import Spotify from '../components/spotify.js';

function AboutMe() {
  return (
    <Box sx={{paddingBottom: '4rem'}}>
      {/* First Section: Image and Blurb */}
      <Grid2 container spacing={4} alignItems="center" sx={{ padding: '2rem' }}>
        <Grid2 item xs={12} md={4}>
          {/* Circular Image */}
          <Avatar
            alt="Christina Casey"
            src={'../images/christina_about.jpg'}
            sx={{ width: 200, height: 200, margin: 'auto' }}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          {/* Blurb */}
          <Typography variant="h4" gutterBottom>
            Hello, I'm Christina Casey!
          </Typography>
          <Typography variant="body1">
           Below you'll find more about my hobbies and interests.
          </Typography>
        </Grid2>
      </Grid2>

      {/* Sections with different backgrounds */}
      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Traveling
        </Typography>
        <Typography variant="body1" sx={{paddingBottom: '2rem'}}>
          I enjoy exploring new places and learning about different cultures.
        </Typography>
        {/* Carousel for Travel Section */}
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
          <div>
            <img src="..\images\Naxos.jpg" alt="Naxos" style={{ width: '300px', height: '300px', objectFit: 'cover'}} />
            <p className="legend">Naxos, Greece</p>
          </div>
          <div>
            <img src="..\images\Madrid.jpg" alt="Madrid" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p className="legend">Sabatini Garden, Madrid, Spain</p>
          </div>
          <div>
            <img src="..\images\NaturalBridge.jpg" alt="Natural Bridge" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p className="legend">Natural Bridge, Rockbridge, VA</p>
          </div>
          <div>
            <img src="..\images\Cascades.jpg" alt="Cascades" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p className="legend">Cascades, Giles, VA</p>
          </div>
          <div>
            <img src="..\images\Rhodes.jpg" alt="Rhodes" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p className="legend">Rhodes, Greece</p>
          </div>
          <div>
            <img src="..\images\Cali.jpg" alt="Cali" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p className="legend">Santa Catalina Island, CA</p>
          </div>
        </Carousel>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Listening to Music & Podcasts
        </Typography>
        <Typography variant="body1" sx={{paddingBottom: '2rem'}}>
          Check out my favorite songs to listen to!
        </Typography>
        <Spotify />
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem', paddingBottom: '2rem', overflow: 'hidden'}}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Reading Books
        </Typography>
        <Typography variant="body1" sx={{paddingBottom: '2rem'}}>
          I love to read books in my free time! My roommate and I run a book club for our sororities. 
        </Typography>
        <Goodreads />
      </Box>
    </Box>
  );
}

export default AboutMe;
