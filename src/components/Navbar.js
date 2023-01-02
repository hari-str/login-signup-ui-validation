import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navbar = ({ setMode, mode }) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: "absolute", right: "60px", top: "20px" }}>
      <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px" }} />
        ) : (
          <LightMode
            sx={{ color: theme.palette.neutral.dark, fontSize: "25px" }}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default Navbar;
