import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useState, useEffect } from "react";

function About() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <Card
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          padding: "30px 30px 30px 30px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h5" component="div">
          The 2023 ICC Men's Cricket World Cup will be the 13th edition of the
          Cricket World Cup, a quadrennial One Day International (ODI) cricket
          tournament contested by men's national teams and organized by the
          International Cricket Council (ICC). It is scheduled to be hosted by
          India with dates rumoured to be from 5 October to 19 November 2023,[1]
          though the ICC previously announced the final would be on 26
          November.[2] It will be the first time the competition is held
          entirely in India; three previous editions were partially hosted there
          – 1987, 1996, and 2011.
        </Typography>
      </Card>
      <Card
        sx={{
          width: "500px",
         
         
          padding: "30px 30px 30px 30px",
          marginTop: "100px",
        }}
      >
        
        <iframe
          width="500"
          height="315"
          src="https://www.youtube.com/embed/HNXhdo5j914"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1>Click to watch the video</h1>
        
       
      </Card>
    </Box>
  );
}

export default About;
