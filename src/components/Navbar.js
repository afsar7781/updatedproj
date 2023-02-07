import React from "react";
import { Avatar, ListItemAvatar } from "@mui/material";
import DropdownProfile from "./DropdownProfile";
import { useState } from "react";


const Navbar = (props) => {
  const { profilepicture, name, value, email,username } = props;

const[openProfile,setOpenProfile]= useState(false)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        
         marginLeft: "50px",
        borderBottom: "1px solid grey",
          width:"119%",
        paddingTop: "11px"
      }}
    >
      <p>{value}</p>
      
      <div onClick={()=>setOpenProfile((prev)=> !prev)}>
        <ListItemAvatar sx={{ display: "flex", flexDirection: "row" }}>
          <Avatar alt="Photo" src={profilepicture}  />
          
          <p style={{ marginTop: "10.5px" }}> {name} </p>
        </ListItemAvatar>
       
      </div>
      {
        openProfile && (
          <DropdownProfile 
           profilepicture={profilepicture} 
           name={name} 
           email={email}
           username={username}
            />
        )
      }
     
    </div>
  );
};

export default Navbar;
