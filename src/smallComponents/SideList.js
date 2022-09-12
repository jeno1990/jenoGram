import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const SideList = ({ setMode, mode }) => {
  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" herf="#home">
            <ListItemIcon>
              <Home fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Pages fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" herf="#home">
            <ListItemIcon>
              <Group fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" herf="#home">
            <ListItemIcon>
              <Person fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight fontSize="large" color="primary" />
            </ListItemIcon>
            <Switch
              onChange={(e) => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
