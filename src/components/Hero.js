import React, { useState, useRef } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import SolutionsSVG from "../assets/vector-12.svg"; // Import your SVG file
import Group from "../assets/group-7.svg";
import CustomBtn from "./Button/CustomBtn"
import WhiteButton from "./Button/WhiteButton"
import "./Button/CustomButton.css"
import "./Button/WhiteButton.css"
import Business from '../components/Popup/Business';
import Talents from '../components/Popup/Talents';
import {
  Dialog,
  DialogContent,
  Menu,
  MenuItem,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { Link as RouterLink, animateScroll as scroll } from 'react-scroll';


const Hero = ({ imageUrl,  onLearnMoreClick}) => {
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  const [talentsModalOpen, setTalentsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const videoRef = useRef(null); // Step 2

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBusinessModalOpen = () => {
    setBusinessModalOpen(true); // Open the Business modal
  };

  const handleBusinessModalClose = () => {
    setBusinessModalOpen(false); // Close the Business modal
  }; 

  const handleTalentsModalOpen = () => {
    setTalentsModalOpen(true); // Open the Talents modal
  };

  const handleTalentsModalClose = () => {
    setTalentsModalOpen(false); // Close the Talents modal
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
 

  const containerStyle = {
    background: `url(${imageUrl}) center/cover no-repeat fixed`,
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const textStyle = {
    color: "#222",
    textAlign: "center",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    marginTop: "109px",
    lineHeight: "82.4px" /* 82.4px */,
  };

  const tetStyle = {
    color: "#222",
    textAlign: "center",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "30px",
    marginTop: "20px",
    
  };

  const redText = {
    color: "red",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    width: "80%",
    maxWidth: "80%",
  };

  const svgStyle = {
    width: "100%",
    maxWidth: "100%",
    marginTop: "-10px", // You can adjust the spacing
  };
  const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
   
  };
  const typoMenu = {
    color: '#000',
    fontFamily: 'Outfit',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140.625%',
  };

  const theme = useTheme();

  const isSmallScreen = useMediaQuery('(max-width:900px)');
  return (
    <div style={containerStyle}>
      <div className="colonees-container">
        <Box sx={{
          maxWidth:'100%',  width: {
            xs: "85%", // Font size for extra small screens
            sm: "80%", // Font size for small screens
            md: "74%", // Font size for medium screens
            lg:"70%"
          },
        }}>
        <Typography
          variant="h4"
          style={textStyle}
          sx={{
            fontSize: {
              xs: "48px", // Font size for extra small screens
              sm: "48px", // Font size for small screens
              md: "60px", // Font size for medium screens
              lg:"80px"
            },
          }}
        >
          AI for building and managing winning{" "}
         <span style={redText}>teams</span>
         
         
        </Typography>
        <Box sx={{ marginLeft: {
              xs: "70%", // Font size for extra small screens
              sm: "60%", // Font size for small screens
              md: "60%",
              lg: "70%" // Font size for medium screens
            }, maxWidth: "100%", width: "30%" }}>
          <img src={SolutionsSVG} alt="Solutions" style={svgStyle} />
        </Box>
       
        </Box>
        <Box sx={{
          maxWidth:'100%',  width: {
            xs: "100%", // Font size for extra small screens
            sm: "80%", // Font size for small screens
            md: "40%", // Font size for medium screens
          },
        }}>
          <div style={boxContainerStyle}>
          <Typography
          variant="h4"
          style={tetStyle}
          sx={{
            fontSize: {
              xs: "16px", // Font size for extra small screens
              sm: "16px", // Font size for small screens
              md: "20px", // Font size for medium screens
            },
            maxWidth:'100%', 
             width: {
              xs: "91%", // Font size for extra small screens
              sm: "91%", // Font size for small screens
              md: "100%", // Font size for medium screens
              lg:"100%"
            },
           
           
          }}
        >
        Collaborate with us as we build the most intelligent system out of Africa that will redefine the hiring and global work process. 
        </Typography>
        
          </div>
        </Box>
        <Box sx={{ marginTop: "50px", maxWidth: "100%",  width: {
              xs: "93%", // Font size for extra small screens
              sm: "93%", // Font size for small screens
              md: "80%", // Font size for medium screens
              lg:"60%"
            }, }}>
          <img
            src={Group}
            alt="Groups"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </Box>
        {!isSmallScreen && (
        <Box style={buttonContainerStyle} sx={{gap:'10px', maxwidth:'100%', width:'50%'}}>
           
   
        <WhiteButton   fontSize="14px" width="15%" borderColor=" 1px solid #E93223" fontColor="red">
        <RouterLink to="video" smooth={true} offset={-100} duration={800}>
          Learn more
        </RouterLink>
        </WhiteButton>
         
         
        <CustomBtn
              onClick={handleMenuOpen}
              variant="outlined"
              fontSize="14px" width="15%" 
              text="Join waitlist"
             
            >
             Join waitlist
           
            </CustomBtn>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: 'white',
                  width:'140px',
                  marginTop:'14px',
                  padding: '14px 23px 14px 22px',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  boxShadow: '20px 20px 50px 0px rgba(0, 0, 0, 0.10)',
                  marginRight:'10px'

                },
              }}
            >
              <MenuItem onClick={handleBusinessModalOpen} style={typoMenu}>Join as a Business</MenuItem>
              <MenuItem onClick={handleTalentsModalOpen} style={typoMenu}>Join as a Talent</MenuItem>
            </Menu>
        </Box>)}
        {isSmallScreen && (
        <Box style={buttonContainerStyle} sx={{gap:'10px', maxwidth:'100%', width:'50%'}}>
       
       <WhiteButton   fontSize="14px" width="30%" borderColor=" 1px solid #E93223" fontColor="red">
        <RouterLink to="video" smooth={true} offset={-100} duration={800}>
          Learn more
        </RouterLink>
        </WhiteButton>
        <CustomBtn
              onClick={handleMenuOpen}
              variant="outlined"
              fontSize="14px" width="30%" 
              text="Join waitlist"
             
            >
             Join waitlist
           
            </CustomBtn>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: 'white',
                  width:'140px',
                  marginTop:'14px',
                  padding: '14px 23px 14px 22px',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  boxShadow: '20px 20px 50px 0px rgba(0, 0, 0, 0.10)',
                  marginRight:'10px'

                },
              }}
            >
              <MenuItem onClick={handleBusinessModalOpen} style={typoMenu}>Join as a Business</MenuItem>
              <MenuItem onClick={handleTalentsModalOpen} style={typoMenu}>Join as a Talent</MenuItem>
            </Menu>
        
        </Box>)}
              {/* Talents Modal */}
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
    </div>
  );
};

export default Hero;
