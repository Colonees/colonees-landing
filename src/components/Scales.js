import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for the predefined animations
import { Box, Typography, TextField, Button, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import CustomButton from './Button/CustomButton'
import './Button/CustomButton.css'
import Business from '../components/Popup/Business';
import Talents from '../components/Popup/Talents';
import {
  Dialog,
  DialogContent,
  Menu,
  MenuItem,
} from '@mui/material';

const Scales = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 800, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Type of easing
      once: false, // Whether the animation should occur only once
    });
  }, []);
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  const [talentsModalOpen, setTalentsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBusinessModalOpen = () => {
    setBusinessModalOpen(true); // Open the Business modal
  };

  const handleBusinessModalClose = () => {
    setBusinessModalOpen(false); // Close the Business modal
  }; 

  const handleTalentsModalOpen = () => {
    setTalentsModalOpen(true); // Open the Talents modal
  };

  const handleTalentsModalClose = () => {
    setTalentsModalOpen(false); // Close the Talents modal
  }; 

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
  };

  const textFieldStyle = {
    margin: '8px 0',
  };

  const textStyle = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Outfit',

    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '103%',
    maxWidth: '100%',
    width: '80%',
    marginTop: '120px',
  };

  const txtStyle = {
    color: '#222',
    textAlign: 'center',
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px',
    maxWidth: '70%',
    marginTop: '60px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:'60px',
    maxWidth:'100%'
  };

  const typoMenu = {
    color: '#000',
    fontFamily: 'Outfit',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140.625%',
  };

  return (
    <Box style={containerStyle}
    data-aos="fade-up" // Example animation type ("fade-up", "fade-down", etc.)
    data-aos-duration="9000" // Override duration for this specific element
    data-aos-offset="200" // Offset (in pixels) from the original trigger point
    >
      <Typography variant="h4" gutterBottom style={textStyle} sx={{
        fontSize: {
          xs: '34px',
          sm: '40px',
          md: '40px',
          lg: "64px",
        },
      }}
      data-aos="fade-up" // Example animation type ("fade-up", "fade-down", etc.)
      data-aos-duration="9000" // Override duration for this specific element
      data-aos-offset="200" // Offset (in pixels) from the original trigger point
      >
        Ready to build or join a fully dedicated remote tech or non-tech team?
      </Typography>
      <Typography variant="h4" gutterBottom style={txtStyle} sx={{
        fontSize: {
          xs: '14px',
          sm: '16px',
          md: '16px',
          lg: "20px",
        },
        width: {
          xs: '60%',
          sm: '50%',
          md: '40%',
          lg: "30%",
        },
      }}
      data-aos="fade-up" // Example animation type ("fade-up", "fade-down", etc.)
      data-aos-duration="9000" // Override duration for this specific element
      data-aos-offset="200" // Offset (in pixels) from the original trigger point
      >
        Join our waitlist today to be among the first to receive the offers of joining early!
      </Typography>
      <Box style={buttonContainerStyle}>
        <CustomButton text="Join waitlist" fontSize="16px" height="55px" sx={{
          maxWidth:'100%',
          width: {
            xs: '40%',
            sm: '50%',
            md: '60%',
            lg: "80%",
          },
        }}
        onClick={handleMenuOpen}>
          Join waitlist
        </CustomButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              backgroundColor: 'white',
              width:'140px',
              marginTop:'14px',
              padding: '14px 23px 14px 22px',
              justifyContent: 'center',
              borderRadius: '10px',
              boxShadow: '20px 20px 50px 0px rgba(0, 0, 0, 0.10)',
              marginRight:'10px'
            },
          }}
        >
          <MenuItem onClick={handleBusinessModalOpen} style={typoMenu}>Join as a Business</MenuItem>
          <MenuItem onClick={handleTalentsModalOpen} style={typoMenu}>Join as a Talent</MenuItem>
        </Menu>
      </Box>
      <Box sx={{ maxWidth: '100%', width: '100%' }}>
        <Dialog open={talentsModalOpen} onClose={handleTalentsModalClose} sx={{ maxWidth: '100vw' }}>
          <DialogContent sx={{ marginTop: '10px',backgroundColor:'#F6F6F6', }}>
            {/* Render the Talents component inside the modal */}
            <Talents />
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleTalentsModalClose}
              aria-label="close"
              sx={{
                position: 'absolute',
                top: 5,
                right: 20,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Dialog open={businessModalOpen} onClose={handleBusinessModalClose} sx={{ maxWidth: '100%', width:'100%',  }}>
          <DialogContent sx={{ marginTop: '10px', backgroundColor:'#F6F6F6',  }}>
            {/* Render the Business component inside the modal */}
            <Business />
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleBusinessModalClose}
              aria-label="close"
              sx={{
                position: 'absolute',
                top: 5,
                right: 20,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Scales;
