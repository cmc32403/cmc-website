import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createTheme, Container, AppBar, Toolbar, Typography, Box, ThemeProvider, IconButton} from '@mui/material';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Involvement from './pages/involvement';
import Research from './pages/research';
import AboutMe from './pages/about';
import { Email, LinkedIn } from '@mui/icons-material';
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/poppins'; // Defaults to weight 400


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#5d7793' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4">
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Christina Casey
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography variant="h6">
              <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>
                Portfolio
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/research" style={{ color: 'white', textDecoration: 'none' }}>
                Research
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/involvement" style={{ color: 'white', textDecoration: 'none' }}>
                Involvement
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/about-me" style={{ color: 'white', textDecoration: 'none' }}>
                About Me
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/research" element={<Research />} />
          <Route path="/involvement" element={<Involvement />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Container>
      {/*Footer*/}
      <AppBar position="static" style={{ backgroundColor: '#5d7793', marginTop: 'auto' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <IconButton color="inherit" href="mailto:christinacasey@vt.edu">
          <Email />
        </IconButton>
        <IconButton color="inherit" href="https://www.linkedin.com/in/christina-casey" target="_blank">
          <LinkedIn />
        </IconButton>
      </Toolbar>
    </AppBar>
    </Router>
    </ThemeProvider>
  );
}

export default App;
