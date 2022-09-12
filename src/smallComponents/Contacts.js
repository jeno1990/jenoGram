import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

export const Contacts = ({ src, username }) => {
  return (
    <Box sx={{ width: "90%",cursor:'pointer'}}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Badge color="primary" variant="dot">
            <Avatar alt="Remy Sharp" src={src} />
          </Badge>
        </ListItemAvatar>
        <ListItemText primary={username} />
      </ListItem>
    </Box>
  );
};
