import React from 'react';
import { Box, Grid, Paper, Typography,  useTheme, useMediaQuery } from "@mui/material";
import frame21 from '../assets/frame21.png';
import WhiteButton from './Button/WhiteButton';
import './Button/WhiteButton.css';
function Bluesy() {
    const boxStyle = {
        backgroundColor:'#E93223',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',
        width:'80%',
        maxwidth:'100%',
        minHeight: 'auto',
        borderRadius:'50px',
        marginLeft:'8%',
    };
    const theme = useTheme();

  const isSmallScreen = useMediaQuery('(max-width:900px)');
  return (
    <div>
        <Box sx={{marginTop:'60px'}}>
        <Box style={boxStyle}>
        <Grid container spacing={2} sx={{ maxWidth: "100%", width: "100%",  }}>
        <Grid item xs={12} sm={12} md={6}  sx={{ marginTop:'100px' }}>
         
            <Box p={2} sx={{  marginLeft:'40px'}}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "white",
                  fontFamily: "Outfit",
                  fontSize: "64px",
                  fontSize: {
                    xs: "34px",
                    sm: "34px",
                    md: "34px",
                    lg: "64px",
                  },
                  fontWeight: "400",
                  width: "90%",
                  maxWidth: "100%",
                  lineHeight: "103%",
                }}
              >
               Join as a 
Business{" "}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Outfit",
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "14px",
                    lg: "20px",
                  },
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "30px",
                }}
              >
               Build and manage winning teams, scale your organization faster with Colonees AI solutions and pool of global talents.
              </Typography><br></br>
              {!isSmallScreen && (
              <Box sx={{maxWidth:'100%', width:'100%'}}>
              <WhiteButton text="Join waitlist" fontSize="14px" width="20%" borderColor=" 1px solid white" fontColor="white" backgroundColor="#E93223" />
              </Box>)}
              {isSmallScreen && (
              <Box sx={{maxWidth:'100%', width:'100%'}}>
              <WhiteButton text="Join waitlist" fontSize="14px" width="50%" borderColor=" 1px solid white" fontColor="white" backgroundColor="#E93223" />
              </Box>)}
            </Box>
        
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ marginTop:'100px' }}>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ maxWidth: "100%", width: "100%", }}
          >
             <img
            src={frame21}
            alt="Groups"
            style={{ width: "100%", maxWidth: "100%", marginLeft:'8px'}}
          />
          </Box>
        </Grid>
      </Grid>
        </Box>    
        </Box>
    </div>
  )
}

export default Bluesy