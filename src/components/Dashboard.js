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

import { useContext } from "react";
import { Datacontext } from "./Dataprovider";




function Dashboard(props) {
  const [name,setname]=useState('')
  const [team,setteam]=useState('')
  const [score,setscore]=useState('')

  const {addplayers}=useContext(Datacontext)



 
 function handlesubmit2(){
    // handlesubmit({name,team,score})
    addplayers({name,team,score});

 }

  // function handlechange(e) {
  //  const  {name,value}=e.target
  //  setplayer(prevstate=>({...prevstate,[name]:value}))
  //  setplayer(prevstate=>{
  //   const updated=[...prevstate,{[name]:value}]
  //   return updated

   
  // }
 
  // console.log(players)

  return (
    
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
        <h1>Enter Player Details</h1>
        <Box sx={{ width: "300px" }}>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label=" Enter cricketer name"
              variant="outlined"
              name="playername"
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Enter Team"
              variant="outlined"
              name="team"
              value={team}
              onChange={(e)=>setteam(e.target.value)}
            />
            <TextField id="outlined-basic" label="Score" variant="outlined"  name="score" value={score} onChange={(e)=>setscore(e.target.value)}/>
            <CardActions>
              <Button sx={{ marginLeft: "100px"}} variant="contained" onClick={handlesubmit2}>
                Submit
              </Button>
            </CardActions>
          </Stack>
        </Box>
      </Card>
     
    </div>
    
  );
}

export default Dashboard;
