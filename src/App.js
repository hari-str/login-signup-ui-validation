import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { themeSetting } from "./theme";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Navbar from "./components/Navbar";

const App = () => {
  //gettheme localstorage
  const getThemeMode = () => {
    return JSON.parse(localStorage.getItem("theme")) || "light";
  };
  const [mode, setMode] = useState(getThemeMode());

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  //setTheme localstorage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(mode));
  }, [mode]);
  return (
    <Box display="flex" height="100vh" sx={{ flexDirection: "column" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<LoginScreen />} exact />
          <Route path="/signup" element={<SignUpScreen />} exact />
        </Routes>
      </ThemeProvider>
    </Box>
  );
};

export default App;
