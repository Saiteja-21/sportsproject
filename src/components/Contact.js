import React from 'react'
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useState, useEffect } from "react";
import { createContext } from "react";

function Contact() {
  return (
    <div>
     
    <div style={{marginLeft:'100px', width:'500px'}}>
    
    <Card
      sx={{
        width: "300px",
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        padding: "30px 30px 30px 30px",
        marginTop: "100px",
        marginLeft: "500px",
      }}
    >
      <h1>Contact form</h1>
      <Box sx={{ width: "300px" }}>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label=" Enter your name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enter email"
            variant="outlined"
          />
           <TextField
          id="outlined-multiline-static"
          label="write your issue"
          multiline
          rows={4}
        //   defaultValue="write your issue"
        />
          <CardActions>
            <Button sx={{ marginLeft: "100px"}} variant="contained">
              Submit
            </Button>
          </CardActions>
        </Stack>
      </Box>
    </Card>
   
  </div>
  
      
    </div>
  )
}

export default Contact
