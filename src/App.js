import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import SignUpScreen from "./screens/SignUpScreen";
import "./App.css";
import { themeSetting } from "./theme";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<LoginScreen />} exact />
          <Route path="/signup" element={<SignUpScreen />} exact />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
