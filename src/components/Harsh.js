import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Image1 from '../assets/logotransparent1320x41211024x320-1-1@2x.png'; // Import your image files
import Image2 from '../assets/download--1-removebgpreview-2-1-1@2x.png';
import Image3 from '../assets/hgdfknv-1-1@2x.png';
import Image4 from '../assets/a-1@2x.png';

function Harsh() {
    const blackBoxStyle = {
        background: '#F6F6F6',
        width: '100%',
        height:'auto',
        maxWidth: '100%',
        padding: '20px 0', // Add padding to create space between buttons and images
        display: 'flex',
        justifyContent: 'center',
        marginTop:'100px',
      };
    
      const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between', // To arrange images in a row with space in between
        alignItems: 'center', // To center images vertically
       // Adjust this value to control the width of the images
        maxWidth:'100%',
       
      };
    
      const imageStyle = {
        width: '10%',
        maxWidth:'10%', // Adjust the width of the images as needed
        height: 'auto', // Maintain aspect ratio
        opacity: 0.5,
      };
     
  return (
    <div>
         <Box style={blackBoxStyle}>
    <Box style={imageContainerStyle} sx={{ width: {
              xs: "93%", // Font size for extra small screens
              sm: "93%", // Font size for small screens
              md: "80%", // Font size for medium screens
              lg:"60%"
            },}}>
      <img src={Image1} alt="Image 1" style={imageStyle} />
      <img src={Image2} alt="Image 2" style={imageStyle} />
      <img src={Image3} alt="Image 3" style={imageStyle} />
      <img src={Image4} alt="Image 4" style={imageStyle} />
    </Box>
  </Box>
    </div>
  )
}

export default Harsh