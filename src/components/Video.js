import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import col_vid from "../assets/col-vid.mp4";
import play_icon_path from "../assets/play.png";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("vid-col");

    video.play();
    setIsPlaying(true);
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
  };

  const videoStyle = {
    maxWidth: "100%",
    width: "90%",
    maxHeight: "100%",
    height: "auto",
    borderRadius: "50px",
    marginTop: "60px",
  };

  const textStyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "103%" /* 65.92px */,
    marginTop: "115px",
  };

  return (
    <div id="video">
    <Box style={containerStyle}>
      <Typography
        variant="h4"
        align="center"
        style={textStyle}
        sx={{
          fontSize: {
            xs: "35px", // Font size for extra small screens
            sm: "40px", // Font size for small screens
            md: "64px", // Font size for medium screens
          },
        }}
      >
        What is Colonees AI?{" "}
      </Typography>
      <div className="video-container">
        <video controls={isPlaying} id="vid-col" style={videoStyle}>
          <source src={col_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <img
            src={play_icon_path}
            className="play-icon"
            alt="Play"
            onClick={handlePlay}
          />
        )}
      </div>
    </Box>
    </div>
  );
};

export default Video;