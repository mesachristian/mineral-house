import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Slide,
  Button,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

// COMPONENTS
import HomeBackground from './components/HomeBackground';

// STYLES & ANIMATIONS
import {
  homeBody,
  homeContentContainer,
  homeContent,
  homeSectionContainer,
  homeBtnsContainer,
  showSolutionsBtnStyle,
  startBtnStyle
} from './styles';
import './animations.css';

const HomePage = () => {
  return (
    <Box>
      <HomeBackground />

      <Box sx={homeBody}>
        <Box sx={homeContentContainer}>
          <Box sx={homeContent}>
            <LeftSection />
            <RightSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const LeftSection = () => {
  const [translate] = useTranslation();
  return (
    <Box sx={homeSectionContainer}>

      <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
        <Typography
          variant="h1" component="div" gutterBottom sx={{ fontWeight: 900 }}>
          {translate('lblMineralHouse')}
        </Typography>
      </Slide>

      <Typography variant="body1" gutterBottom>
        {translate('lblMineralHouseHomeDescription')}
      </Typography>

      <Box sx={{ m: '20px' }} />

      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1500}>
        <Box sx={homeBtnsContainer}>
          <Button component={Link} to="/about" variant="contained" color="primary" className='vibration' sx={showSolutionsBtnStyle}>
            {translate('lblShowSolutions')}
          </Button>

          <Button component={Link} to="/about" variant="outlined" color="primary" sx={startBtnStyle}>
            {translate('lblStartNow')}
          </Button>
        </Box>
      </Slide>

    </Box>
  );
}

const RightSection = () => {
  return(
    <Box sx={homeSectionContainer}>

    </Box>
  );
}
export default HomePage;