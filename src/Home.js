import React, { useRef } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Image from './assets/group-6.svg';
import Harsh from './components/Harsh';
import Video from './components/Video';
import Herro from './components/Herro';
import Redding from './components/Redding';
import Bluesy from './components/Bluesy';
import Scales from './components/Scales';
import ImageCarousel from './components/Image';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function Home() {
 

  return (
    <div>
      <Navbar />
      <Hero imageUrl={Image}  />
      <Harsh />
      <Video />
      <Herro />
      <Redding />
      <Bluesy />
      <Scales />
      <Box>
        <ImageCarousel />
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
