import React from 'react';
import { Box, Grid, Paper, Typography,  useTheme, useMediaQuery } from "@mui/material";
import frame21 from '../assets/frame21.png';
import WhiteButton from './Button/WhiteButton';
import './Button/WhiteButton.css';
function Bluesy() {
  const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
   
  };
    const boxStyle = {
        backgroundColor:'#E93223',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',
       
        maxwidth:'100%',
        minHeight: 'auto',
        borderRadius:'50px',
       
    };
    const theme = useTheme();

  const isSmallScreen = useMediaQuery('(max-width:900px)');
  return (
    <div>
        <Box sx={{marginTop:'60px'}}>
          <div style={boxContainerStyle}>
          <Box style={boxStyle} sx={{
          width: {
            xs: "90%",
            sm: "90%",
            md: "85%",
            lg : "80%",
          }
        }}>
        <Grid container spacing={2} sx={{ maxWidth: "100%", width: "100%",  }}>
        <Grid item xs={12} sm={12} md={6}  sx={{ marginTop:{
           xs: "34px",
           sm: "34px",
           md: "120px",
           lg: "120px",
        }, marginBottom:{
           xs: "20px",
           sm: "20px",
           md: "100px",
           lg: "100px",
        } }}>
         
            <Box p={2} sx={{    marginLeft: {
                    xs: "5px",
                    sm: "10px",
                    md: "20px",
                    lg: "40px",
                  },}}>
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
                 
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                  width : {
                    xs : "100%",
                    sm : "100%",
                    md : "50%",
                    lg: "80%",
                  }, 
                  fontWeight: "400",
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
                 
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                  width : {
                    xs : "100%",
                    sm : "100%",
                    md : "90%",
                    lg: "90%",
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
              <WhiteButton text="Join waitlist" fontSize="14px" width="30%" borderColor=" 1px solid white" fontColor="white" backgroundColor="#E93223" />
              </Box>)}
              {isSmallScreen && (
             <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
             <WhiteButton text="Join waitlist" fontSize="14px" width="40%" borderColor="1px solid white" fontColor="white" backgroundColor="#E93223" />
         </Box>
         )}
            </Box>
        
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ marginTop:{
          xs: "0px",
          sm : "0px",
          md: "100px",
          lg: "100px",
        } }}>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ maxWidth: "100%", width: "100%", height: {
              xs: 300,  // Specify different heights for different screen sizes
              sm: 400,
              md: 400,
              lg: 500,
            },}}
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
          </div>
        
        </Box>
    </div>
  )
}

export default Bluesy