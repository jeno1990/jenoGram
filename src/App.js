import Sidebar from "./componenets/Sidebar";
import Rightbar from "./componenets/Rightbar";
import Feed from "./componenets/Feed";
import Navbar from "./componenets/Navbar";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" justifyContent="space-around">
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
