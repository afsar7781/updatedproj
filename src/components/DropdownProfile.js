import React from 'react'
import { Avatar, ListItemAvatar } from "@mui/material";


const DropdownProfile = (props) => {
    const {profilepicture,name,email,username } = props;
  return (
    <div className='flex flex-col dropDownProfile' >
    <ul className='flex flex-col gap-4'>

       
        <img src={profilepicture} style={{width:"157px",height:"150px",borderRadius:"999px", marginTop:"-28px"}} alt="ooops!" />
        
        <p style={{marginLeft:"25px",marginTop:"3px"}}>{name}</p>
       
        <p style={{marginLeft:"10px",marginTop:"-16px"}}>{email}</p>
        
        <hr />
      
        <ListItemAvatar sx={{ display: "flex", flexDirection: "row",marginTop:"-5px" }}>
          <Avatar alt="Photo" src={profilepicture}  />
          <p style={{marginLeft:"8px",marginTop:"6px"}}> {name} </p>
        </ListItemAvatar>
<hr />
        <ListItemAvatar sx={{ display: "flex", flexDirection: "row",marginTop:"-5px" }}>
          <Avatar alt="Photo" src={profilepicture}  />

          <p style={{marginLeft:"8px",marginTop:"6px"}}> {username} </p>
       
        </ListItemAvatar>

        <button class="mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]" role="none"><a href="/" role="none">Sign out</a></button>
    </ul>
  
    </div>
  )
}

export default DropdownProfile;