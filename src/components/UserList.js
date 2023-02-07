import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const UserList = (props) => {
  return (
    <List
      onClick={() => props.handleClick(props.user)}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.user?.profilepicture} />
        </ListItemAvatar>
        <ListItemText primary={props.user?.name} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default UserList;
