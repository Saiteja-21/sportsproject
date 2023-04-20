import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import axios from 'axios'

function Popularplayer() {
 
  const [playerlist, setplayerlist] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3136c43c2cmsh026a1c123cf50cdp1293b4jsnc1f200b1cf1d",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
  };

 fetch("https://sportscore1.p.rapidapi.com/players?page=1",options)
 .then((response)=>response.json())
 .then((data)=>{console.log(data.data)
                setplayerlist(data.data)})

    

  

  return (
    <Box sx={{ marginLeft: "130px" }}>
      <Grid container spacing={2}>
        {playerlist ? playerlist.map((item) => {
          return (
            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                 <img src={item.photo}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Player name:  ${item.name}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Position: ${item.position_name}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {`country: ${item.flag}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        }):<p>loading</p>}
      </Grid>
    </Box>
  );
}

export default Popularplayer;
