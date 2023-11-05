import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import SolutionsSVG from "../assets/vector-12.svg"; // Import your SVG file
import Group from "../assets/group-7.svg";
import CustomButton from "./Button/CustomButton"
import WhiteButton from "./Button/WhiteButton"
import "./Button/CustomButton.css"
import "./Button/WhiteButton.css"

const Hero = ({ imageUrl }) => {
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
            lg:"60%"
          },
        }}>
        <Typography
          variant="h4"
          style={textStyle}
          sx={{
            fontSize: {
              xs: "48px", // Font size for extra small screens
              sm: "48px", // Font size for small screens
              md: "80px", // Font size for medium screens
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
        <WhiteButton text="Learn more" fontSize="16px" width="15%" borderColor=" 1px solid #E93223" fontColor="red" />
        <CustomButton text="join waitlist" fontSize="16px" width="15%" height="50px" >
          Join waitlist
        </CustomButton>
        </Box>)}
        {isSmallScreen && (
        <Box style={buttonContainerStyle} sx={{gap:'10px', maxwidth:'100%', width:'50%'}}>
        <WhiteButton text="Learn more" fontSize="14px" width="30%" borderColor=" 1px solid #E93223" fontColor="red" />
        <CustomButton text="Join waitlist" fontSize="14px" width="30%" height="50px" >
          Join waitlist
        </CustomButton>
        </Box>)}
      </div>
    </div>
  );
};

export default Hero;
