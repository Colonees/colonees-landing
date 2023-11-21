import React, { useState, useRef } from 'react';
import { Box, Grid, Typography, TextField, ThemeProvider, createTheme } from '@mui/material';
import Logo from '../assets/colonees-logo-11.svg';
import Image1 from '../assets/social-links.svg';
import CustomButton from './Button/CustomButton';
import './Button/CustomButton.css';
import Arrow from '../assets/arrow.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link as RouterLink, animateScroll as scroll } from 'react-scroll';



function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    subscribe: true,
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

    fetch('https://colonees-backend2023-de3e223a18ff.herokuapp.com/api/subscriber/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        subscribe: formData.subscribe,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        addToLog('Suscribed successfully');
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      offset: -100, // Adjust the offset as needed
      smooth: 'easeInOutQuad',
    });
  };
  const boxStyle = {
    backgroundColor: '#0A142F',
    display: 'flex',
    width: '92%',
    maxWidth: '100%',
    marginLeft: '8%',
  };

  const gridStyle = {
    backgroundColor: '#0A142F',

  };

  const textStyle = {
    color:  '#FFF',
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '32px', 
  };

  const txtStyle = {
    color: '#FFF',
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '32px',
  };

  const dividerStyle = {
    width: '93%',
    maxWidth:'95%',
    height: '2px',
    backgroundColor: 'white',
    margin: '20px 0',
    marginTop:'60px'
  };

  const ttStyle = {
    color: '#FFF',
    fontFamily: 'Outfit',
    fontStyle: 'normal', 
    fontWeight: '400',
  lineHeight: 'normal',
  };
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const textFieldStyle = {
    margin: '8px 0',
    '& .MuiOutlinedInput-input': {
      color: 'white', // Set the text color to white
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Set the border color to white
      },
      '&:hover fieldset': {
        borderColor: 'white', // Set the border color on hover to white
      },
    },
  };

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: 'white', // Set the outline color to white
            },
            '&:hover fieldset': {
              borderColor: 'white', // Set the outline color on hover to white
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: 'white', // Set the label color to white
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Box sx={{ marginTop: '120px', backgroundColor: '#0A142F', height:'auto', display:'flex', justifyContent:'center' }}>
        <Box style={boxStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} sx={{marginTop:'60px'}}>
              <Grid container justifyContent="center">
                {/* First grid */}
                <Grid item xs={10} style={gridStyle}>
                  <img src={Logo} alt="" sx={{width:'151px', height:'41px', }} />
                  <Typography variant="h4" style={textStyle} sx={{marginTop:'31px', fontSize: {
      xs: '16px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '20px', // Font size for medium screens
    }}}>
                    +234-806-471-3542
                  </Typography> 
                  <Typography
  variant="h4"
  style={txtStyle}
  sx={{
    marginTop: '10px',
    fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }
  }}
>
  <a href="mailto:info@colonees.com?subject=Subject&body=Body" style={{ textDecoration: 'none', color: 'inherit' }}>
    info@colonees.com
  </a>
</Typography>


                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5} sx={{marginTop:'70px'}}>
              <Grid container justifyContent="center">
                {/* Second grid */}
                <Grid item xs={10} style={gridStyle}>
                  {/* Content for the second grid */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <Typography variant="h4" style={txtStyle} sx={{fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }}}>
                    Quick Links
                  </Typography>
                  <Typography variant="h4" style={ttStyle} sx={{marginTop:'24px',fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }}}>
                     <RouterLink to="Hero" smooth={true} offset={-100} duration={800}>
                Home
              </RouterLink>
                  </Typography>
                  <Typography variant="h4" style={ttStyle} sx={{marginTop:'42px',fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }}}>
    <RouterLink to="why-colonees" smooth={true} offset={-100} duration={800}>
About
</RouterLink>
                  </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h4" style={ttStyle} sx={{marginTop:'57px',fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }}}>
                    Privacy Policy
                  </Typography>
                  <Typography variant="h4" style={ttStyle} sx={{marginTop:'40px',fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }}}>
                    Terms of Service
                  </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{marginTop:'70px'}}>
              <Grid container justifyContent="center">
                {/* Third grid */}
                <Grid item xs={10} style={gridStyle}>
                <div ref={logContainerRef} style={{ color: 'white' }}>
  {logMessages.map((message, index) => (
    <div key={index}>{message}</div>
  ))}
</div>

                <Typography variant="h4" style={txtStyle} sx={{fontSize: {
      xs: '14px', // Font size for extra small screens
      sm: '16px', // Font size for small screens
      md: '16px', // Font size for medium screens
    }}}>
                Subscribe
              </Typography>
              <Box style={buttonContainerStyle}>
  <TextField
    label="Get products updates"
    variant="outlined"
    InputProps={{
      style: {
        borderColor: 'white', // Set the outline color to white
        color: 'white',
        fontFamily: 'Outfit',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '140.625%', /* 19.688px */
      },
    }}
    value={formData.email}
    onChange={(e) => handleFieldChange('email', e)}
    style={textFieldStyle}
  />
       <CustomButton onClick={handleSubmit} text="" fontSize="20px" width="50px" height="55px">
       <img
            src={Arrow}
           
           
          />
        </CustomButton>
      </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
            <Box style={dividerStyle}></Box>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="center">
                <Grid item xs={10} style={gridStyle}>
                <Grid container direction="column" alignItems="center" spacing={2}>
    <Grid item>
      <img src={Image1} alt="Image 1" style={{ width: '100%', maxWidth: '100%' }} />
    </Grid>
  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Fifth grid */}
            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="center">
                <Grid item xs={10} style={gridStyle}>
                <Typography variant="h4" style={textStyle}  sx={{fontSize: {
      xs: '12px', // Font size for extra small screens
      sm: '15px', // Font size for small screens
      md: '20px', // Font size for medium screens
    }}}>
                Copyright ©Colonees 2023- All rights reserved
              </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box></Box>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Footer;
