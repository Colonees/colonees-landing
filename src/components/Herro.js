import React from "react";
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
  const boxStyle = {
    borderRadius: "30px",
    background: "#F6F6F6",
    padding: "20px",
    width: "100%", // Make the box width responsive
    textAlign: "center",
    height: "369px",
    marginBottom: "20px",
  };

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
    height: "auto", // Maintain aspect ratio
  };

  return (
    <Box
      p={2}
      bgcolor="background.default"
      minHeight="100vh"
      sx={{
        marginTop: "115px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "100%", width: "80%" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={0}>
            <Box p={2}>
              <Typography
                variant="h6"
                gutterBottom
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
                  fontWeight: "400",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
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
                Colonees is an AI for building and managing winning teams.
                Period!
              </Typography><br></br>
              <Typography
                sx={{
                  color: "#222",
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
                Our AI will enable organisations of all sizes to build highly
                efficient teams, leveraging our proprietary intelligent team
                formation and team bonding system.{" "}
              </Typography><br></br>
              <Typography
                sx={{
                  color: "#222",
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
                    <Box sx={{ marginTop: "10%" }}>
                      <img src={Frame} alt="" style={responsiveImageStyle} />
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ marginTop: "10%" }}>
                      <img src={Frame2} alt="" style={responsiveImageStyle} />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box flex="1">
              <Paper elevation={0} sx={{ maxWidth: "100%", width: "100%" }}>
                <Box p={2}>
                  <Box>
                    <img src={Frame3} alt="" style={responsiveImageStyle} />
                    <Box></Box>
                  </Box>
                  <Box
                    sx={{ marginTop: "10%", maxWidth: "100%", width: "100%" }}
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
  );
};

export default MyComponent;
