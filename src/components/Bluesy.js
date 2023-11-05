import React from 'react';
import { Box, Grid, Paper, Typography,  useTheme, useMediaQuery } from "@mui/material";
import frame22 from '../assets/frame22.png'
import CustomButton from './Button/CustomButton'
import './Button/CustomButton.css'
function Bluesy() {
    const boxStyle = {
        backgroundColor:'#FFE7E5',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',
        width:'80%',
        maxwidth:'100%',
        height:'623px',
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
        <Grid item xs={12} sm={12} md={6}>
         
            <Box p={2} sx={{ marginLeft:'40px'}}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "black",
                  fontFamily: "Outfit",
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
                  color: "black",
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
              <CustomButton text="Join waitliist" fontSize="14px" width="30%" height="50px">
                join waitlist
              </CustomButton>
              </Box>)}
              {isSmallScreen && (
              <Box sx={{maxWidth:'100%', width:'100%'}}>
              <CustomButton text="Join waitliist" fontSize="14px" width="50%" height="50px">
                join waitlist
              </CustomButton>
              </Box>)}
            </Box>
          
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ maxWidth: "100%", width: "100%", marginLeft:"8px" }}
          >
             <img
            src={frame22}
            alt="Groups"
            style={{ width: "100%", maxWidth: "100%" }}
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