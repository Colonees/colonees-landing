import React, { useState, useRef } from 'react';
import { Box, Grid, Typography, TextField, Container, Checkbox, CircularProgress } from '@mui/material';
import SolutionsSVG from '../../assets/vector-12.svg';
import CustomButton from '../Button/CustomButton';
import '../Button/CustomButton.css';

function Talents() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    industry: '',
    designation: '',
    subscribe: false,
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

    fetch('https://colonees-backend2023-de3e223a18ff.herokuapp.com/api/talent-waitlist/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        full_name: formData.full_name,
        email: formData.email,
        industry: formData.industry,
        designation: formData.designation,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        addToLog('Form data sent successfully');
        // Reload the page after successful form submission
        window.location.reload();
      })
      .catch((error) => {
        addToLog(`Fetch error: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const boxSyle = {
    backgroundColor: '#F6F6F6',
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
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
      <div ref={logContainerRef}>
        {logMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <Box style={boxSyle}>
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
            Join as a <span style={redText}>Talents</span>
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
                    label="John doe"
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
                    Industry
                  </Typography>
                  <TextField
                    label="Tech or Non tech"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle,
                    }}
                    value={formData.industry}
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
                    Role
                  </Typography>
                  <TextField
                    label="Designation"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: labelStyle }}
                    InputProps={{
                      style: inputFieldStyle,
                    }}
                    value={formData.designation}
                    onChange={(e) => handleFieldChange('designation', e)}
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

export default Talents;
