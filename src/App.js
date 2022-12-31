import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import "./App.css";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Routes>
        <Route path="/" element={<LoginScreen />} exact />
        <Route path="/signup" element={<SignUpScreen />} exact />
      </Routes>
    </Grid>
  );
};

export default App;
