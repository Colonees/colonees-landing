import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@mui/material';
import CustomButton from './Button/CustomButton';
import CustomBtn from './Button/CustomBtn'
import './Button/CustomButton.css';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button, 
  Box,// Import Button component
  Menu,
  MenuItem,
  ArrowDropDown,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/colonees-logo-1.svg';
import Business from '../components/Popup/Business';
import Talents from '../components/Popup/Talents';
import { Link as RouterLink, animateScroll as scroll } from 'react-scroll';



function Navbar() {
  const is800px = useMediaQuery('(max-width:1000px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  const [talentsModalOpen, setTalentsModalOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

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

  const typoFont = {
    fontFamily: "Outfit",
  };

  const typoMenu = {
    color: '#000',
    fontFamily: 'Outfit',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140.625%',
  }



  return (
    <div id='Hero'>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          padding: '33px 60px 33px 32px',
          height: '100px',
          fontFamily: 'akira expanded',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            elevation: 0,
            
          }}
        >
            <img
              src={Logo}
              alt="Logo"
              style={{  maxWidth:'100%',  height:'auto',
            width:{
              xs:'20%',
              sm:'30%',
              md:'20%',
              lg:'10%'
            }
            }}
            />
          <div>
            <List
              component="nav"
              sx={{
                display: 'flex',
                gap: '5px',
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}
            >
              <ListItem button sx={{ fontFamily: 'Outfit' }}>
                <ListItemText />
                <Typography
                  variant="body1"
                  fontWeight={700}
                  fontFamily="Outfit"
                  sx={{
                    color: '#222',
                    textAlign: 'center',
                    fontFamily: 'Akira Expanded',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '19.69px',
                    width: '100px',
                    // height: '34px',
                  }}
                  style={typoFont}
                >
                 <RouterLink to="why-colonees" smooth={true} offset={-100} duration={800}>
                Why Colonees
              </RouterLink>
                </Typography>
              </ListItem>
              <ListItem button onClick={handleBusinessModalOpen} sx={{ fontFamily: 'akira expanded' }}>
                <ListItemText />
                <Typography
                  variant="body1"
                  fontWeight={700}
                  fontFamily="akira expanded"
                  sx={{
                    color: '#222',
                    textAlign: 'center',
                    
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '19.69px',
                    width: '100px',
                    // height: '34px',
                  }}
                  style={typoFont}
                >
                  Business
                </Typography>
              </ListItem>

              <ListItem button onClick={handleTalentsModalOpen} sx={{ fontFamily: 'akira expanded' }}>
                <ListItemText />
                <Typography
                  variant="body1"
                  fontWeight={700}
                  fontFamily="akira expanded"
                  sx={{
                    color: '#222',
                    textAlign: 'center',
                    
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '19.69px',
                    width: '100px',
                    // height: '34px',
                  }}
                  style={typoFont}
                >
                  Talents
                </Typography>
              </ListItem>
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


              
            </List>
          </div>
          {is800px ? (
            <IconButton  onClick={handleDrawerOpen}>
              <MenuIcon
                sx={{ width: '46px', height: '46px', marginRight: '-70px', color:'black' }}
              />
            </IconButton>
          ) : (
            <Box>
            {/* Responsive button with dropdown */}
            <CustomButton
              onClick={handleMenuOpen}
              variant="outlined"
              fontSize="12px" width="100%" height="40px"
              text="join waitlist"
             
            >
             Join waitlist
           
            </CustomButton>
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
          </Box>
          )}
        </Toolbar>
      </AppBar>

      {is800px && (
       <Drawer
       anchor="right"
       open={drawerOpen}
       onClose={handleDrawerClose}
       sx={{
         width: '50%', // Change this value to your desired width
       }}
     >
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
   <IconButton onClick={handleDrawerClose}>
     <CloseIcon />
   </IconButton>
 </div>
          <List
            sx={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              alignItems: 'flex-start', // Align text to start from the left
              width: '300px',
            }}
          >
           <ListItem button sx={{ textAlign: 'left' }}>
  <ListItemText>
    <Typography
      variant="body1"
      fontWeight={700}
      sx={{ color: 'black' }}
      style={typoFont}
    >
      <RouterLink to="why-colonees" smooth={true} offset={-100} duration={800} onClick={handleDrawerClose}>
        Why Colonees
      </RouterLink>
    </Typography>
  </ListItemText>
</ListItem>
            <ListItem button onClick={handleBusinessModalOpen}  sx={{ textAlign: 'left' }}>
              <ListItemText onClick={handleDrawerClose}>
                <Typography
                  variant="body1"
                  fontWeight={700}
                 
                  sx={{ color: 'Black' }}
                  style={typoFont}
                >
                  Business
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={handleTalentsModalOpen} sx={{ textAlign: 'left' }}>
              <ListItemText onClick={handleDrawerClose}>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  
                  sx={{ color: 'Black' }}
                  style={typoFont}
                >
                  Talents
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem  sx={{ textAlign: 'left' }}>
            <CustomButton  onClick={handleMenuOpen} text="join waitlist" fontSize="12px" width="87px" height="40px" >
              Join waitlist
            </CustomButton>
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
            </ListItem>
            {/* ... (other list items with the same textAlign style) */}
          </List>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
