import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import rectangle1 from '../assets/rectangle1.png';
import rectangle2 from '../assets/rectangle2.png';
import rectangle3 from '../assets/rectangle3.png';
import rectangle4 from '../assets/rectangle4.png';
import './ImageCarousel.css'; // Import the CSS file for styling
import { Box } from '@mui/material';
const ImageCarousel = () => {
  return (
    <div className="image-carousel-container" sx={{marginTop:'100px'}}>
      <Box className="image-carousel" sx={{marginTop:'100px'}}>
        <img src={rectangle1} alt="Image 1" className="image" />
        <img src={rectangle2} alt="Image 2" className="image" />
        <img src={rectangle3} alt="Image 3" className="image" />
        <img src={rectangle4} alt="Image 4" className="image" />
        <img src={rectangle1} alt="Image 1" className="image" /> {/* Duplicate the images */}
        <img src={rectangle2} alt="Image 2" className="image" /> {/* Duplicate the images */}
        <img src={rectangle3} alt="Image 3" className="image" /> {/* Duplicate the images */}
        <img src={rectangle4} alt="Image 4" className="image" /> {/* Duplicate the images */}
      </Box>
    </div>
  );
};

export default ImageCarousel;
