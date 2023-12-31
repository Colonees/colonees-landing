import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for the predefined animations
import { Box, Grid, Paper, Typography } from "@mui/material";
import Svg1 from "../assets/circleuser-1.svg"; // Import your SVG files
import Svg2 from "../assets/circleuser-1.svg";
import Svg3 from "../assets/circleuser-1.svg";
import Svg4 from "../assets/circleuser-1.svg";
import PngImage from "../assets/ellipse-16@2x.png";
import Frame from "../assets/Frame.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Frame4 from "../assets/Frame4.png";


const MyComponent = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Type of easing
      once: false, // Whether the animation should occur only once
    });
  }, []);

  const svgStyle = {
    width: "80px",
    height: "80px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const aboveBox1Style = {
    borderRadius: "50%",
    backgroundColor: "red",
    width: "92px",
    height: "92px",
    marginLeft: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const responsiveImageStyle = {
    maxWidth: "100%", // Make the image width responsive
    width:'100%',
    height: "auto", // Maintain aspect ratio
  };
  const boxContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
   
  };

  return (
    <div style={boxContainerStyle} id="why-colonees"
    data-aos="fade-up" // Example animation type ("fade-up", "fade-down", etc.)
    data-aos-duration="9000" // Override duration for this specific element
    data-aos-offset="200" // Offset (in pixels) from the original trigger point
    >
    <Box
      p={2}
    bgcolor="background.default"
      minHeight="100vh"
      sx={{
        marginTop: "115px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "90%",
          sm: "90%",
          md: "85%",
          lg : "80%",
        },
      
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "100%", width: "100%" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={0} sx={{justifyContent:'center'}}>
            <Box p={2} >
              <Typography
                variant="h6"
                gutterBottom
                align="center"
                sx={{
                  color: "#222",
                  fontFamily: "Outfit",
                  fontSize: "64px",
                  fontSize: {
                    xs: "34px",
                    sm: "34px",
                    md: "34px",
                    lg: "64px",
                  },
                  width : {
                    xs : "100%",
                    sm : "100%",
                    md : "80%",
                    lg: "80%",
                  }, 
                  fontWeight: "400",
                 

                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                 
                  maxWidth: "100%",
                  lineHeight: "103%",
                }}
                
              >
                Who can use Colonees AI?{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#222",
                  fontFamily: "Outfit",
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "14px",
                    lg: "20px",
                  },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
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
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "30px",
                }}
              >
                Colonees is an AI for building and managing winning teams.
                Period!
              </Typography><br></br>
              <Typography
                sx={{
                  color: "#222",
                  fontFamily: "Outfit",
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
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
                Our AI will enable organisations of all sizes to build highly
                efficient teams, leveraging our proprietary intelligent team
                formation and team bonding system.{" "}
              </Typography><br></br>
              <Typography
                sx={{
                  color: "#222",
                  fontFamily: "Outfit",
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
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
                It’s the perfect solution for talents and professionals seeking
                to work in hybrid or remote environments with global companies.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ maxWidth: "100%", width: "100%" }}
          >
            <Box flex="1" mr={1}>
              <Paper elevation={0} sx={{ marginTop: "50px" }}>
                <Box p={2}>
                  <Box>
                    <Box sx={{ marginTop: "10%" }}
                     data-aos="zoom-in"
                     data-aos-duration="800"
                     data-aos-delay="800"
                    >
                      <img src={Frame} alt="" style={responsiveImageStyle} />
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ marginTop: "10%" }}
                     data-aos="zoom-in"
                     data-aos-duration="800"
                     data-aos-delay="800"
                    >
                      <img src={Frame2} alt="" style={responsiveImageStyle} />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box flex="1">
              <Paper elevation={0} sx={{ maxWidth: "100%", width: "100%" }}
              >
                <Box p={2}>
                  <Box
                   data-aos="zoom-in"
                   data-aos-duration="800"
                   data-aos-delay="800"
                  >
                    <img src={Frame3} alt="" style={responsiveImageStyle} />
                    <Box></Box>
                  </Box>
                  <Box
                    sx={{ marginTop: "10%", maxWidth: "100%", width: "100%" }}
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="800"
                  >
                    <img src={Frame4} alt="" style={responsiveImageStyle} />
                    <Box></Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default MyComponent;
