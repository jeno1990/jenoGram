import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ForestIcon from "@mui/icons-material/Forest";
import { Mail, Notifications } from "@mui/icons-material";
import { Box } from "@mui/system";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "gray",
  padding: "0 10px",
  borderRadius: "2px",
  width: "40%",
}));
const Icons = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});
const SmallScreen = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

const Navbar = () => {
  const [open , setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          JenoGram
        </Typography>
        <ForestIcon sx={{ display: { xs: "block", sm: "none" } }}></ForestIcon>
        <Search>
          <InputBase placeholder="search"></InputBase>
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={3} color="error" sx={{ cursor: "pointer" }}>
            <Mail />
          </Badge>

          <Badge badgeContent={2} color="error" sx={{ cursor: "pointer" }}>
            <Notifications />
          </Badge>
          <Avatar
            
            sx={{ width: "30", height: "30", cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            onClick = {e=>setOpen(true)}
          />
        </Icons>
        <SmallScreen sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            onClick = {e=>setOpen(true)}
            sx={{ width: "30", height: "30", cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          jeno
        </SmallScreen>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
