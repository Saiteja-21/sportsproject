import React, { useState } from "react";
import { useContext } from "react";
import Dashboard from "./Dashboard";
import { Datacontext } from "./Dataprovider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


function Scorepage() {
  
  const { res } = useContext(Datacontext);
  const { handledelete } = useContext(Datacontext);
  const { handlesearch } = useContext(Datacontext);
  console.log(res);

  return (
    <>
   
   
    
   {res.length>0 ?  <Box sx={{ marginLeft: "650px" }}>
      <input style={{height:'30px',width:'200px',marginRight:'530px',marginTop:'10px'}} type="text" onChange={handlesearch} placeholder="search player" />
    <Box sx={{ flexGrow: 1,marginTop:'20px'}}>
      
     
      <Grid container spacing={2}>
        {res ? (
          res.map((item) => {
            return (
              <Grid item xs={8}>
                <Card sx={{ width: "320px" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Player name:  ${item.name}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Team:  ${item.team}`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {`Score:  ${item.score}`}
                    </Typography>
                    <IconButton
                      onClick={() => handledelete(item.name)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h1>loading</h1>
        )}
      </Grid>
    </Box>
    </Box>:<h1>No players yet!!</h1>}
    </>
  );
}

export default Scorepage;
