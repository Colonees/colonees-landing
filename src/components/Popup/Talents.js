import React from 'react';
import { Box, Grid, Typography, Button, TextField, Container, Checkbox, InputAdornment } from '@mui/material';
import SolutionsSVG from '../../assets/vector-12.svg';
import CustomButton from '../Button/CustomButton';
import '../Button/CustomButton.css'

// Import your icon components here
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

function Talents() {
  const boxSyle = {
    backgroundColor: 'white',
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
    marginTop: '20px', // You can adjust the spacing
  };
  return (
    <div>
      <Box style={boxSyle}>
        <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Typography
            sx={{
              color: 'black',
              fontFamily: 'Outfit',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '103%', /* 65.92px */
              marginTop: '88px',
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
            <Typography
              sx={{
                color: 'black',
                fontFamily: 'Outfit',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '103%',
                marginTop: '46px',
              }}
            >
              We need your information
            </Typography>
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
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
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
                    label="Tech or Non-tech"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <WorkIcon />
                        </InputAdornment>
                      ),
                    }}
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
                    label="JOhnDoe@email.com"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
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
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                           <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
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
                    <Checkbox />
                    Yes, I would like to receive email and text messages with news from Colonees.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Box style={buttonContainerStye} sx={{ marginTop:'20px'}}>
                <CustomButton  fontSize="20px" width="100%" height="50px">
                join waitlist
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
