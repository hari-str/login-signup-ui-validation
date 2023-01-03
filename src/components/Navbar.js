import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navbar = ({ setMode, mode }) => {
  const theme = useTheme();

  //switch theme
  const switchTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.alt }}>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{ maxWidth: "1140px", margin: "0 auto", padding: "1rem" }}
      >
        <IconButton onClick={switchTheme}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode
              sx={{ color: theme.palette.neutral.dark, fontSize: "25px" }}
            />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
