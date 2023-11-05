import React from 'react';
import { Box, Grid, Typography, Button, TextField, Container, Checkbox, InputAdornment } from '@mui/material';
import SolutionsSVG from '../../assets/vector-12.svg';
import CustomButton from '../Button/CustomButton';
import '../Button/CustomButton.css'
import { useState } from 'react';
import axios from 'axios';



function Talents() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    industry: '',
    designation: '',
    subscribe: false, // To track if the user wants to subscribe
  });
  const handleFieldChange = (fieldName, event) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post('https://colonees-backend2023-de3e223a18ff.herokuapp.com/api/talent-waitlist/', {
        full_name: formData.full_name,
        email: formData.email,
        industry: formData.industry,
        designation: formData.designation,
      }, {
        headers: {
          'Origin':'https://colonees.com'
        }
      })
      .then((response) => {
        if (response.status === 200) {
          // Handle success, e.g., show a success message or redirect the user
          console.log('Form data sent successfully');
        } else {
          // Handle errors, e.g., show an error message
          console.error('Error sending form data');
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error('Network error:', error);
        // Display an error message to the user
      });
  };
  
  
  
  const boxSyle = {
    backgroundColor: '#F6F6F6',
    width: '100%',
    maxWidth: '100%',
    height: 'auto',

    
  };

  const buttonContainerStyle = {
    display: 'flex',
    marginTop: '20px',
    width: '80%',
    maxWidth: '80%',
  };

  const buttonContainerStye = {
   
  };

  const redText = {
    color: '#E93223',
  };
  const svgStyle = {
    width: '100%',
    maxWidth: '100%',
    marginTop: '20px', // You can adjust the spacing
  };
  const inputFieldStyle = {
    backgroundColor: 'white',
  };
  const labelStyle = {
    color: '#1E293B',
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140.625%', /* 19.688px */
  };
  const checkboxStyle = {
    color: 'red', // Set the color to red
    '&.Mui-checked': {
      color: 'red', // Set the color to red when checked
    },
    alignItems: 'center',
  };

  return (
    <div>
      <Box style={boxSyle}>
        <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', }}>
          <Typography
            sx={{
              color: 'black',
              fontFamily: 'Outfit',
              fontSize: {
                xs:"25px",
                sm: "30px",
                md: "40px",
                lg: "48px",
              },
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '103%', /* 65.92px */
              marginTop: '68px',
            }}
          >
            Join as a <span style={redText}>Talents</span>
          </Typography>
        </Box>
        <Box sx={{ marginLeft: '50%', maxWidth: '30%', width: '25%' }}>
          <img src={SolutionsSVG} alt="Solutions" style={svgStyle} />
        </Box>
        <Container>
          <Box>
            <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', }}>
            <Typography
              sx={{
                color: 'black',
                fontFamily: 'Outfit',
                fontSize: '22px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '103%',
                marginTop: '46px',
              }}
            >
              We need your information
            </Typography>
            </Box>
           
            <Grid container spacing={2} sx={{ marginTop: '40px' }} >
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye}>
                  <Typography
                    sx={{
                      color: 'black',
                      fontFamily: 'Outfit',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '103%',
                    }}
                    
                  >
                    Full name
                  </Typography>
                  <TextField
                    label="John doe"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle
                    }}
                    value={formData.full_name}
        onChange={(e) => handleFieldChange('full_name', e)}
                    sx={{ marginTop: '10px' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye}>
                  <Typography
                    sx={{
                      color: 'black',
                      fontFamily: 'Outfit',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '103%',
                    }}
                  >
                   Industry
                  </Typography>
                  <TextField
                    label="Tech or Non tech"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle
                    }}
                    value={formData.business_name}
                    onChange={(e) => handleFieldChange('industry', e)}
                    sx={{ marginTop: '10px' }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye}>
                  <Typography
                    sx={{
                      color: 'black',
                      fontFamily: 'Outfit',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '103%',
                      marginTop: '20px',
                    }}
                  >
                    Email Address
                  </Typography>
                  <TextField
                    label="johndoe@gmail.com"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle
                    }}
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e)}
                    sx={{ marginTop: '10px' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye}>
                  <Typography
                    sx={{
                      color: 'black',
                      fontFamily: 'Outfit',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '103%',
                      marginTop: '20px',
                    }}
                  >
                   Role
                  </Typography>
                  <TextField
                    label="Designation"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle
                    }}
                    value={formData.designation}
        onChange={(e) => handleFieldChange('designation', e)}
                    sx={{ marginTop: '10px' }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: '20px', }}>
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye}>
                  <Typography
                    sx={{
                      color: 'black',
                      fontFamily: 'Outfit',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '103%',
                      marginTop: '20px',
                    }}
                  >
                   <Checkbox
  sx={checkboxStyle}
 
/>

                    Yes, I would like to receive email and text messages with news from Colonees.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye} sx={{ marginTop:'20px'}}>
                <CustomButton fontSize="20px" width="100%" height="50px" onClick={handleSubmit}>
  Join Waitlist
</CustomButton>

                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Talents;
