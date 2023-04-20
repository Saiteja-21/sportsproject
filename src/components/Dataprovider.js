import React, { useContext } from 'react'
import { createContext,useState } from 'react'

export  const Datacontext=createContext()

function Dataprovider(props) {
  // const [players,setplayers]=useState([])
  // const [player, setplayer] = useState({});
  const [players,setplayers]=useState([]);
  const [search,setsearch]=useState('')

  function addplayers(value){
    console.log('111')
    setplayers(prev=>{
      return (
        [...prev,value]
      )
    })
    
  
    
    
  }
  function handledelete(name){
    setplayers(()=>{
      return(
      players.filter((n)=>n.name!==name
      )
      )})

  }
  function handlesearch(e){
    setsearch(e.target.value
      )}

  
  let res=players.filter((item)=>item.name.includes(search))
  console.log(res)
 
 
  // function handlesubmit(){
  //   setplayers([...players,player])
  //   setplayer({})

  // }
  // function handlesubmit(value){
  //   setplayer(value)
  //   console.log(player)
  //   console.log(players)
  //   return
  // }
   
  return (
    <div>
      <Datacontext.Provider value={{addplayers,res,handledelete,handlesearch}}>
        {props.children}

      </Datacontext.Provider>

      
      
    </div>
  )
}

export default Dataprovider
