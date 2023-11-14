import React, { useState } from 'react';
import { Box, Grid, Paper, Typography,  useTheme, useMediaQuery } from "@mui/material";
import frame22 from '../assets/frame22.png'
import CustomButton from './Button/CustomButton'
import './Button/CustomButton.css'
import {
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import Talents from '../components/Popup/Talents';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
function Bluesy() {
  const [talentsModalOpen, setTalentsModalOpen] = useState(false);
  

  const handleTalentsModalOpen = () => {
    setTalentsModalOpen(true); // Open the Business modal
  };

  const handleTalentsModalClose = () => {
    setTalentsModalOpen(false); // Close the Business modal
  }; 

  const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
   
  };
    const boxStyle = {
        backgroundColor:'#FFE7E5',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',
       
        maxwidth:'100%',
        height:'623px',
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
        <Grid item xs={12} sm={12} md={6}>
         
            <Box p={2} sx={{  marginLeft: {
                    xs: "5px",
                    sm: "10px",
                    md: "20px",
                    lg: "40px",
                  },}}>
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
                    lg: "70%",
                  }, 
                  fontWeight: "400",
                 
                  maxWidth: "100%",
                  lineHeight: "103%",
                  
                }}
              >
               Join as a 
Talent{" "}
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
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
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
              <CustomButton onClick={handleTalentsModalOpen} text="Join waitliist" fontSize="14px" width="30%" height="50px">
                join waitlist
              </CustomButton>
              </Box>)}
              {isSmallScreen && (
              <Box sx={{maxWidth:'100%', width:'100%', display: 'flex', justifyContent: 'center' }}>
              <CustomButton onClick={handleTalentsModalOpen} text="Join waitliist" fontSize="14px" width="40%" height="50px">
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
        </div>
       
        </Box>
        <Box sx={{ maxWidth: '100%', width: '100%' }}>
        <Dialog open={talentsModalOpen} onClose={handleTalentsModalClose} sx={{ maxWidth: '100vw' }}>
          <DialogContent sx={{ marginTop: '10px',backgroundColor:'#F6F6F6', }}>
            {/* Render the Talents component inside the modal */}
            <Talents />
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleTalentsModalClose}
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