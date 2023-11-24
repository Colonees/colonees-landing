import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for the predefined animations
import { Box } from '@mui/material';
import Image1 from '../assets/logotransparent1320x41211024x320-1-1@2x.png';
import Image2 from '../assets/download--1-removebgpreview-2-1-1@2x.png';
import Image3 from '../assets/hgdfknv-1-1@2x.png';
import Image4 from '../assets/a-1@2x.png';

function Harsh() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Type of easing
      once: false, // Whether the animation should occur only once
    });
  }, []);
  useEffect(() => {
    const images = document.querySelectorAll('.zooming-image');

    const toggleZoom = () => {
      images.forEach((image, index) => {
        const delay = index * 200; // Adjust delay for each image
        setTimeout(() => {
          image.classList.toggle('zoom-in');
          image.classList.toggle('zoom-out');
        }, delay);
      });
    };

    const interval = setInterval(toggleZoom, 3000); // Adjust interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div  data-aos="fade-up" // Example animation type ("fade-up", "fade-down", etc.)
    data-aos-duration="9000" // Override duration for this specific element
    data-aos-offset="200" // Offset (in pixels) from the original trigger point
    >
      <Box
        sx={{
          background: '#F6F6F6',
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '100%',
            width: {
              xs: '93%',
              sm: '93%',
              md: '80%',
              lg: '60%',
            },
          }}
        >
          <img src={Image1} alt="Image 1" className="zooming-image" />
          <img src={Image2} alt="Image 2" className="zooming-image" />
          <img src={Image3} alt="Image 3" className="zooming-image" />
          <img src={Image4} alt="Image 4" className="zooming-image" />
        </Box>
      </Box>
    </div>
  );
}

export default Harsh;
