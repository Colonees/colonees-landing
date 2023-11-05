import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import CustomButton from './Button/CustomButton'
import './Button/CustomButton.css'

const Scales = () => {
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
  };

  return (
    <Box style={containerStyle}>
      <Typography variant="h4" gutterBottom style={textStyle} sx={{
        fontSize: {
          xs: '34px',
          sm: '40px',
          md: '40px',
          lg: "64px",
        },
      }}>
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
      }}>
        Join our waitlist today to be among the first to receive the offers of joining early!
      </Typography>
      <Box style={buttonContainerStyle}>
      <TextField
  label="Enter Email"
  variant="outlined"
  style={{ border: 'none', ...textFieldStyle }}
/>

        <CustomButton text="Join waitlist" fontSize="16px" height="55px" sx={{
maxWidth:'100%',
width: {
  xs: '40%',
  sm: '50%',
  md: '60%',
  lg: "70%",
},
        }}>
          Join waitlist
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Scales;
