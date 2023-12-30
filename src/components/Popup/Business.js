import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography, TextField, Container, Checkbox, CircularProgress } from '@mui/material';
import SolutionsSVG from '../../assets/vector-12.svg';
import CustomButton from '../Button/CustomButton';
import '../Button/CustomButton.css';

function Business() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    business_name: '',
    business_industry: '',
    subscribed: false,
  });
  const [loading, setLoading] = useState(false);
  const [logMessages, setLogMessages] = useState([]);
  const logContainerRef = useRef(null);

  const addToLog = (message) => {
    setLogMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleFieldChange = (fieldName, event) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);

    fetch('https://api.colonees.com/api/business-waitlist/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        full_name: formData.full_name,
        email: formData.email,
        business_name: formData.business_name,
        business_industry: formData.business_industry,
        subscribed: formData.subscribed,
      }),
    })
    .then((response) => {
      if (response.status === 400) {
        throw new Error('Email already exists');
      } else if (response.status === 500) {
        throw new Error('Network problem, please try again');
      } else if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      alert(`Successfully joined Business waitlist`);
      // Reload the page after successful form submission
      window.location.reload();
    })
    .catch((error) => {
      // Show the fetch error in an alert
      alert(` ${error}`);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const boxStyle = {
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

  const buttonContainerStye = {};

  const redText = {
    color: '#E93223',
  };
  const svgStyle = {
    width: '100%',
    maxWidth: '100%',
    marginTop: '20px',
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
    lineHeight: '140.625%',
  };
  const checkboxStyle = {
    color: 'red',
    '&.Mui-checked': {
      color: 'red',
    },
    alignItems: 'center',
  };

  return (
    <div>
      <Box style={boxStyle}>
        <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Typography
            sx={{
              color: 'black',
              fontFamily: 'Outfit',
              fontSize: {
                xs: '25px',
                sm: '30px',
                md: '40px',
                lg: '48px',
              },
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '103%',
              marginTop: '68px',
            }}
          >
            Join as a <span style={redText}>Business</span>
          </Typography>
        </Box>
        <Box sx={{ marginLeft: '50%', maxWidth: '30%', width: '25%' }}>
          <img src={SolutionsSVG} alt="Solutions" style={svgStyle} />
        </Box>
        <Container>
          <Box>
            <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Typography
                sx={{
                  color: 'black',
                  fontFamily: 'Outfit',
                  fontSize: {
                    xs: '17px',
                    sm: '18px',
                    md: '22px',
                    lg: '22px',
                  },
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '103%',
                  marginTop: '46px',
                }}
              >
                We need your information
              </Typography>
            </Box>

            <Grid container spacing={2} sx={{ marginTop: '40px' }}>
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
                    label="John Doe"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle,
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
                    Business Name
                  </Typography>
                  <TextField
                    label="Ex: Apple"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle,
                    }}
                    value={formData.business_name}
                    onChange={(e) => handleFieldChange('business_name', e)}
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
                    label="name@company.com"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle,
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
                    Designation
                  </Typography>
                  <TextField
                    label="Ex: Fintech"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle,
                    }}
                    value={formData.designation}
                    onChange={(e) => handleFieldChange('business_industry', e)}
                    sx={{ marginTop: '10px' }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
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
                    <Checkbox sx={checkboxStyle} />
                    Yes, I would like to receive email and text messages with news from Colonees.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box style={buttonContainerStye} sx={{ marginTop: '20px' }}>
                  <CustomButton fontSize="20px" width="100%" height="50px" onClick={handleSubmit} disabled={loading}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Join Waitlist'}
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

export default Business;
