import { Box } from "@mui/material";
import React from "react";
import { SideList } from "../smallComponents/SideList";

const Sidebar = ({setMode , mode}) => {
  return (
    <Box
      flex={1}
      p={2}
      mr={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position='fixed'>
        <SideList setMode={setMode} mode={mode}></SideList>
      </Box>
    </Box>
  );
};

export default Sidebar;
