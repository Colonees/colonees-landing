import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for the predefined animations
import { Box, Grid, Paper, Typography,  useTheme, useMediaQuery } from "@mui/material";
import frame21 from '../assets/frame21.png';
import WhiteButton from './Button/WhiteButton';
import './Button/WhiteButton.css';
import {
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import Business from '../components/Popup/Business';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
function Bluesy() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Type of easing
      once: false, // Whether the animation should occur only once
    });
  }, []);
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  

  const handleBusinessModalOpen = () => {
    setBusinessModalOpen(true); // Open the Business modal
  };

  const handleBusinessModalClose = () => {
    setBusinessModalOpen(false); // Close the Business modal
  }; 


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
       overflow:'hidden',
        maxwidth:'100%',
       height:'auto',
        borderRadius:'50px',
       
    };
    const theme = useTheme();

  const isSmallScreen = useMediaQuery('(max-width:900px)');
  return (
    <div
    data-aos="fade-up" // Example animation type ("fade-up", "fade-down", etc.)
    data-aos-duration="9000" // Override duration for this specific element
    data-aos-offset="200" // Offset (in pixels) from the original trigger point
    >
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
        <Grid container spacing={0} sx={{ maxWidth: "100%", width: "100%",  }}>
        <Grid item xs={12} sm={12} md={6}  sx={{ marginTop:{
           xs: "34px",
           sm: "34px",
           md: "80px",
           lg: "100px",
        }, marginBottom:{
           xs: "20px",
           sm: "20px",
           md: "0px",
           lg: "0px",
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
                    xs: "13px",
                    sm: "13px",
                    md: "13px",
                    lg: "18px",
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
              <WhiteButton  onClick={handleBusinessModalOpen}  fontSize="14px" width="30%" borderColor=" 1px solid white" fontColor="white" backgroundColor="#E93223">
                Join waitlist
                </WhiteButton>
              </Box>)}
              {isSmallScreen && (
             <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
             <WhiteButton  onClick={handleBusinessModalOpen}  fontSize="14px" width="40%" borderColor=" 1px solid white" fontColor="white" backgroundColor="#E93223">
                Join waitlist
                </WhiteButton>
         </Box>
         )}
            </Box>
        
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ marginTop:{
          xs: "0px",
          sm : "0px",
          md: "77px",
          lg: "77px",
        } }}>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ maxWidth: "100%", width: "100%", }}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
             <img
            src={frame21}
            alt="Groups"
            style={{ width: "100%", maxWidth: "100%", marginLeft:'8px', height:'auto'}}
          />
          </Box>
        </Grid>
      </Grid>
        </Box>    
          </div>
        
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

    </div>
  )
}

export default Bluesy