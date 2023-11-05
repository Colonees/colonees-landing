import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@mui/material';
import CustomButton from './Button/CustomButton';
import './Button/CustomButton.css';

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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/colonees-logo-1.svg';
import Business from '../components/Popup/Business';
import Talents from '../components/Popup/Talents';


function Navbar() {
  const is800px = useMediaQuery('(max-width:1000px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [businessModalOpen, setBusinessModalOpen] = useState(false);
  const [talentsModalOpen, setTalentsModalOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
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

  const typoFont = {
    fontFamily: "Outfit",
  }



  return (
    <div>
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
                  Why Colonees
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
              <Box sx={{  width: '100%' }}>
                <Dialog open={businessModalOpen} onClose={handleBusinessModalClose} sx={{ maxWidth: '100%', width:'100%',  }}>
                  <DialogContent sx={{ marginTop: '10px', backgroundColor:'#F6F6F6',  }}>
                    {/* Render the Business component inside the modal */}
                    <Business />
                  </DialogContent>
                </Dialog>
              </Box>

              {/* Talents Modal */}
              <Box sx={{ maxWidth: '100%', width: '100%' }}>
  <Dialog open={talentsModalOpen} onClose={handleTalentsModalClose} sx={{ maxWidth: '100vw' }}>
    <DialogContent sx={{ marginTop: '10px',backgroundColor:'#F6F6F6', }}>
      {/* Render the Talents component inside the modal */}
      <Talents />
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
            {/* Responsive button styles */}
            <CustomButton text="join waitlist" fontSize="12px" width="87px" height="40px" >
              Join waitlist
            </CustomButton>
            
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
            <ListItem sx={{ textAlign: 'left' }}>
              <ListItemText>
                <Typography
                  variant="body1"
                  fontWeight={700}
                 
                  sx={{ color: 'black' }}
                  style={typoFont}
                >
                  Why Colonees
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={handleBusinessModalOpen}  sx={{ textAlign: 'left' }}>
              <ListItemText>
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
              <ListItemText>
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
            <CustomButton text="join waitlist" fontSize="12px" width="87px" height="40px" >
              Join waitlist
            </CustomButton>
            </ListItem>
            {/* ... (other list items with the same textAlign style) */}
          </List>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
