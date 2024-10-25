import React from 'react';
import { Typography, Box, Grid2, Avatar} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

function Involvement() {
  return (
    <Box sx={{paddingBottom: '4rem'}}>
      {/* First Section: Image and Blurb */}
      <Grid2 container spacing={4} alignItems="center" sx={{ padding: '2rem' }}>
        <Grid2 item xs={12} md={4}>
          {/* Circular Image */}
          <Avatar
            alt="Christina Casey"
            src="..\images\ChristinaTBEHeadshot.JPG"
            sx={{ width: 200, height: 200, margin: 'auto' }}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          {/* Blurb */}
          <Typography variant="h4" gutterBottom>
            Hello, I'm Christina Casey!
          </Typography>
          <Typography variant="body1">
          Below you'll find more about my involvement around campus and in the community.
          </Typography>
        </Grid2>
      </Grid2>

      {/* Sections with different backgrounds */}
      <Box sx={{ backgroundColor: '#fffff', padding: '2rem' }}>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
          <div>
            <img src="..\images\TBE.JPEG" alt="TBE" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="..\images\PiPhi.jpg" alt="PiPhi" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="..\images\RGL.jpg" alt="RGL" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="..\images\SGLA.jpg" alt="SGLA" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="..\images\Directors.JPG" alt="DirectorsTBE" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          </div>
        </Carousel>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Conferences
        </Typography>
        <Typography variant="body1">
          Southeastern Greek Leadership Association Conference Attendee Spring 2024 | Atlanta, GA<br />
          One Big Thanks Conference Attendee Fall 2023 | Blacksburg, VA<br />
          One Big Thanks Conference Attendee Spring 2023 | College Station, TX
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          The Big Event | Blacksburg VA
        </Typography>
        <Typography variant="body1">
          Director 2024-present<br />
          Technology and Analytics Executive 2023-2024<br />
          Projects Executive 2022-2023<br />
          Projects Committee Member 2021-2022<br />
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Pi Beta Phi | Blacksburg, VA
        </Typography>
        <Typography variant="body1">
          Vice President of Operations 2024-present<br />
          Community Service Chair 2023<br />
          Sister 2022
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Real Greek Life | Blacksburg, VA
        </Typography>
        <Typography variant="body1">
          Secretary 2024-present<br />
          Creative Director 2023-2024
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Center for the Enhancement of Engineering Diversity | Blacksburg, VA
        </Typography>
        <Typography variant="body1">
          Peer Mentor 2022, 2023<br />
          Mentee 2021
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Orthodox Christian Fellowship | Blacksburg, VA
        </Typography>
        <Typography variant="body1">
          Member 2021-present
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Hillcrest Hall Council | Blacksburg, VA
        </Typography>
        <Typography variant="body1">
          Treasurer 2021-2023
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Greek Orthodox Youth of America | Toms River, NJ
        </Typography>
        <Typography variant="body1">
          President 2020-2021<br />
          Corresponding Secretary 2019-2020<br />
          Treasurer 2018-2019
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#d8e8f0', padding: '2rem' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold'}}>
          Cross Country and Distance Track Team | Toms River, NJ
        </Typography>
        <Typography variant="body1">
          Captain 2020-2021<br />
          Teammate 2017-2020<br />
        </Typography>
      </Box>
    </Box>
  );
}

export default Involvement;
